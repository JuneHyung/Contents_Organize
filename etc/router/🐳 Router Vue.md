# 🐳 Router Vue

component를 경로에 매핑하고 Vue Router가 렌더링할 위치를 알려주는 것

## 🌏 Start

### 👉 설치

```shell
npm install vue-router@4
또는
yarn add vue-router@4
```



### 👉 router-link

a태그 대신 router-link.

Vue라우터는 **페이지를 다시 로드하지 않고,** URL변경.



> **push, replace, go**
>
> **push**
>
> URL이동. **히스토리 스택에 추가**되므로 뒤로가기 시 이전 URL로 이동
>
> template 내에서 `<route-link :to="path">` 를 통해 페이지 이동을 하면 이는 내부에서 **$router.push 를 호출하는 것**
>
> **replace**
>
> 현재 URL을 대체하기 때문에 스택X.
>
> 단순히 현재 페이지를 전환하는 역할
>
> **go**
>
> 인자로 넘긴 숫자만큼 히스토리 스택에서 앞, 뒤 페이지로 이동하는 메소드
>
> 해당 숫자 URL이 스택에 없으면 라우팅 실패.



### 👉 router-view

URL에 해당하는 component를 표시함.

어디나 배치해 레이아웃에 맞게 조정 가능.

```javascript
// 1. route 컴포넌트 정의
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

---------------------------------------------------------------------------------------------------------
// 2. routes 정의
// route들의 component 
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

---------------------------------------------------------------------------------------------------------
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. 사용할 history 구현을 제공합니다. 여기서는 단순화를 위해 hash history를 사용합니다.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

---------------------------------------------------------------------------------------------------------
// 5. root instance를 생성하고, 마운트합니다.
const app = Vue.createApp({})
// 라우터 인스턴스를 사용하여 전체 앱이 라우터를 인식하도록 해야 합니다.
app.use(router)

app.mount('#app')

// Now the app has started!
```

```javascript
// Home.vue
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```





## 🌏 동적 경로 일치

### 👉 Params를 사용한 동적 경로 일치

주어진 패턴으로 경로에 동일한 component에 매핑해야 되는 경우가 자주 있다.

같은 사용자 정보를 보여주는 페이지인데 사용자 ID가 다른 경우.

Vue라우터에서 경로에 동적 세그먼트를 사용할 수 있다.

```javascript
const User = {
  template: '<div>User</div>',
}

// these are passed to `createRouter`
const routes = [
  // dynamic segments start with a colon
  { path: '/users/:id', component: User },
]
```

URL은 모두 동일한 경로 `/users/`로 매핑된다.<br/>`/users/jhjoe`, `/users/johnny`



파라미터는 `:`로 사용.

route에 매치되면, 파라미터는 **`this.$route.params`**로 노출됩니다.

동일한 경로에 여러가지 파라미터가 올 수 있다

| pattern                          | matched pathmatched path     | $route.params$route.params                         |
| -------------------------------- | ---------------------------- | -------------------------------------------------- |
| /users/:username/users/:username | /users/eduardo/users/eduardo | `{ username: 'eduardo' }``{ username: 'eduardo' }` |
| /users/:username/posts/:postId   | /users/eduardo/posts/123     | `{ username: 'eduardo', postId: '123' }`           |

[demo](https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1)



### 👉 매개변수 변경에 반응하기

**`/users/jhjoe`-> `/users/johnny` 이동할 때 동일한 component가 재사용 되는것에 주의**

모두 동일한 component를 렌더링 하기 때문에 **이전 인스턴스를 삭제하고 새 인스턴스를 만드는 것보다 효율적.**

❗ **component의 lifecycle hooks가  호출되지 않음을 의미.**



### 👉 catchAll / 404 Not Found Route

일반적으로 / 사이의 문자만 일치 하지만, 정규표현식의 사용도 가능.

param 바로 뒤에 괄호 안에 regexp를 추가하여 사용자 정의 param regexp를 사용 가능.

```javascript
const routes = [
  // 모든요소를 `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  // `/user-`로 시작해서 매칭되는 모든 것들을 `route.params.afterUser아래 넣는다.
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```





## 🌏 경로 일치 구문

### 👉 params의 사용자 정의 정규식

`/:orderId` 및 `/:productName` 둘다 동일한 Url로 오는 경우 구별할 방법이 필요.

가장 쉬운 방법은 구분하는 경로에 정적 섹션을 추가하는 것.<br/>( 아래 예제의 경우 앞에 `/o`와 `/p`를 추가. )

```javascript
const routes = [
  // matches /o/3549
  { path: '/o/:orderId' }, // 1번
  // matches /p/books
  { path: '/p/:productName' }, // 2번
]
```

1번의 경우 항상 숫자. 2번의 경우 무엇이든 올 수 있다.

그것에 따라 정규식을 지정할 수 있다.

 숫자의 경우 orderId가 오고, 다른 항목의 경우 productName으로 갈 것이다.

```javascript
const routes = [
  // /:orderId -> matches only numbers
  { path: '/:orderId(\\d+)' },
  // /:productName -> matches anything else
  { path: '/:productName' },
]
```

❗ `백슬래시(\)`사용시 두번 써야 함.



### 👉 반복 가능한 매개변수

`*`와 `+`를 사용해 반복 가능하다는 것을 표시.

```javascript
const routes = [
  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
    
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: '/:chapters*' },
]
```

이렇게 하면 문자열 대신 매개변수 배열이 제공되며 명명된 경로를 사용할 때 배열을 전달해야 함.

```javascript
// given { path: '/:chapters*', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// produces /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// produces /a/b

// given { path: '/:chapters+', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// throws an Error because `chapters` is empty => +는 1개이상
```



### 👉 민감하고(sensitive), 엄격한(strict) route 옵션

기본적으로 모든 경로는 대소문자를 구분하지 않으며, 후행 슬래시가 있거나 없는 경로와 일치합니다.<br/>`/user, /user/, /User`

❗ **strict**와 **sensitive** 옵션들로 라우터와 경로 수준에서 모두 설정이 가능.

```javascript
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // will match /users/posva but not:
    // - /users/posva/ because of strict: true
    // - /Users/posva because of sensitive: true
    { path: '/users/:id', sensitive: true },
    // will match /users, /Users, and /users/42 but not /users/ or /users/42/
    { path: '/users/:id?' },
  ],
  strict: true, // applies to all routes
})
```



### 👉 선택적 매개변수

`?`수정자를 사용해 매개변수를 선택사항으로 표시할 수도 있다.

`?`매개변수는 반복이 불가능.

```javascript
const routes = [
  // will match /users and /users/posva
  { path: '/users/:userId?' },
  // will match /users and /users/42
  { path: '/users/:userId(\\d+)?' },
]
```



### 👉 디버깅

경로가 일치하지 않는 이유를 이해하기 위해 경로가 정규식으로 변환되는 방법을 파해치거나 버그 보고를 위해 경로 순위 도구를 사용할 수 있다.

[경로 순위 도구](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..)





## 🌏 중첩 경로

일부 UI는 여러 수준으로 중첩된 구성 요소로 구성됨.

이 경우 **URL의 세그먼트가 중첩된 구성 요소의 특정 구조에 해당하는 것**이 매우 일반적.

```javascript
/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

Vue라우터에서 **중첩 경로 구성을 사용**해 관계를 표현할 수 있다.

```vue
<div id="app">
  <router-view></router-view>
</div>
```

```javascript
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
}
```

위와 같은경우 **`children`옵션을 사용**하여 중첩된 경로 구성을 표현할 수 있다.<br/>()`/`로 시작하는 경로는 루트경로)

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

만약  `user/jhjoe` 처럼 뒤에 profile이나, posts가 안붙는 경우에도 무언가 렌더링 하고 싶을 것이다.

그런 경우 빈 중첩 경로를 제공.

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: UserHome },

      // ...other sub routes
    ],
  },
]
```

[빈 중첩경로 demo](https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo)



### 👉 중첩된 명명된 경로

Named Routes를 다룰 때 일반적으로 child route의 이름을 다음처럼 지정함.

```
const routes = [
  {
    path: '/user/:id',
    component: User,
    // notice how only the child route has a name
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```

`/user/:id`로 이동 시 항상 중첩 경로가 표시됨.

일부 시나리오에서는 중첩 경로로 이동하지 않고 명명된 경로로 이동하고자 할 수 있습니다.<br/>(중첩된 경로를 표시하지 않고 (`/user/:id`)로 이동하는 경우)

이 경우 부모 경로의 이름을 지정할 수도 있지만 페이지를 다시 로드하면 명명된 경로 대신 /users/:id 경로로의 탐색으로 간주되므로 항상 중첩된 자식이 표시됨.

```javascript
const routes = [
  {
    path: '/user/:id',
    name: 'user-parent'
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```





## 🌏 프로그래밍 방식 탐색

선언적 탐색을 위한 앵커 태그를 만드는 데 `router-link` 사용하는 것 외에도 라우터 인스턴스 메서드를 사용하여 프로그래밍 방식으로 작업을 수행할 수 있다.



### 👉 다른위치로 이동

**`this.$router.push`**

다른 URL로 이동 시 `router.push`를 사용.

새 항목을 기록 스택으로 푸시하므로 사용자가 브라우저 뒤로 버튼을 클릭하면 이전 URL로 이동함.

`<router-link :to="...">`하는 것과 같다.

```javascript
const username = 'eduardo'
// we can manually build the url but we will have to handle the encoding ourselves
router.push(`/user/${username}`) // -> /user/eduardo
// same as
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// if possible use `name` and `params` to benefit from automatic URL encoding
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params` cannot be used alongside `path`
router.push({ path: '/user', params: { username } }) // -> /user
```

prop `to`는 `router.push`와 같은 종류의 객체를 혀용하기 때문에 정확히 동일한 규칙이 두 객체에 모두 적용됨.

 `router.push()`와 다른 모든 탐색 메서드는 탐색이 완로될 때까지 기다렸다가 성공했는지 실패했는지 알 수 있는 Promise를 반환.

([Navigation Handling](https://router.vuejs.org/guide/advanced/navigation-failures.html)에서 자세히)



### 👉 현재 위치 바꾸기

`router.push()`처럼 작동.

❗ **새 기록 항목을 푸시하지 않고 탐색한다.** => 현재 항목을 대체한다.

`replace: true`를 직접 추가 가능.

| 선언적                            | 프로그래밍 방식       |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

```javascript
router.push({ path: '/home', replace: true })
// equivalent to
router.replace({ path: '/home' })
```



### 👉 트래버스 히스토리 (Traverse history)

`window.history.go(n)`와 유사하게 히스토리 스택에서 앞으로 또는 뒤로 이동할 단계를 나타내는 매개변수로 단일 정수를 사용.

```javascript
// go forward by one record, the same as router.forward()
router.go(1)

// go back by one record, the same as router.back()
router.go(-1)

// go forward by 3 records
router.go(3)

// fails silently if there aren't that many records
router.go(-100)
router.go(100)
```



### 👉 히스토리 조작

`router.push`, `router.replace`, `router.go`는 
`window.history.pushState`, `window.history.replaceState` and `window.history.go`, 등 Browser History APIs를 모방한것.



## 🌏 명명된 경로(Named routes)

path와 함꼐 모든 경로에 name을 제공할 수 있다.

**장점**

* 하드코딩된 URL 없음
* params의 자동 인코딩/디코딩
* URL 오타 방지
* 경로 순위 무시

```javascript
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

```javascript
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

```javascript
router.push({ name: 'user', params: { username: 'erina' } })
```

[named-routes 예시](https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js)



## 🌏 명명된 뷰(Named view)

때로는 여러 보기를 중첩하는 대신 동시에 표시해야 합니다.

name이 없는게 default

```javascript
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

여러 component사용시 components옵션 사용

```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // short for LeftSidebar: LeftSidebar
        LeftSidebar,
        // they match the `name` attribute on `<router-view>`
        RightSidebar,
      },
    },
  ],
})
```

[named-views-vue-router Demo](https://codesandbox.io/s/named-views-vue-router-4-examples-rd20l)



## 🌏 중첩된 명명된 뷰

중첩된 보기가 있는 명명된 보기를 사용하여 복잡한 레이아웃을 만들 수 있습니다. 

그렇게 할 때 중첩된 `router-view` 이름도 지정해야 합니다. 설정 패널을 예로 들어 보겠습니다.

```
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- `UserEmailsSubscriptions`, `UserProfile`, `UserProfilePreview`중첩된 뷰 구성 요소

위 구성으로 코드를 표현해보면 아래와 같다.

```javascript
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>
```

```javascript
{
  path: '/settings',
  // You could also have named views at the top
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```

[중첩된 named view 예시](https://codesandbox.io/s/nested-named-views-vue-router-4-examples-re9yl?&initialpath=%2Fsettings%2Femails)



## 🌏 Redirection 및 Alias(별칭)

### 👉 Redirection

`routes` 구성 시 수행됨.

명명된 경로로 타겟팅도 가능.<br/> (/home으로 왔을 때 homepage로 명명된 경로로 redirect)

```javascript
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
```

동적 Redircetion을 위해 함수 사용 가능.

```javascript
const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: '/search', query: { q: to.params.searchText } }
    },
  },
  {
    path: '/search',
    // ...
  },
]
```

[Navigation Guard](https://router.vuejs.org/guide/advanced/navigation-guards.html)는 redirection되는 경로에 적용되지 않고 대상에만 적용됨.<br/>( Vue 라우터에서 제공하는 탐색 가드는 주로 탐색을 리디렉션하거나 취소하여 탐색을 보호하는 데 사용됩니다 )

redirect 작성 시, component 옵션은 직접 연결되지 않으므로 렌더링할 component가 없으므로 생략할 수 있습니다.

❗ 경로 레코드에 child 및 redirect 속성이 있는 경우 component속성도 있어야함.



### 👉 relative redirection

상대 위치로 redirect가 가능.

```javascript
const routes = [
  {
    // will always redirect /users/123/posts to /users/123/profile
    path: '/users/:id/posts',
    redirect: to => {
      // the function receives the target route as the argument
      // a relative location doesn't start with `/`
      // or { path: 'profile'}
      return 'profile'
    },
  },
]
```



### 👉 Alias

redirection은 사용자가 `/home`을 방문할 때 URL이 **`/`로 대체**되고, /랑 match시키는 것을 말한다.

alias는 `/home`을 방문했을 때, URL이 **`/home`이 남아있지만,** `/`를 방문하는 것처럼 match하는 것을 의미.

```javascript
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
```

alias 사용 시 구성의 중첩 구조에 제약을 받는 대신 UI 구조를 임의의 URL에 자유롭게 매핑할 수 있다.

중첩 경로에서 경로를 절대 경로로 만들려면 별칭을 `/`로 시작해야함.

경로에 매개변수가 있다면, 매개변수를 포함.

```javascript
const routes = [
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // this will render the UserList for these 3 URLs
      // - /users
      // - /users/list
      // - /people
      { path: '', component: UserList, alias: ['/people', 'list'] },
        
	  // this will render the UserDetails for these 3 URLs
      // - /users/24
      // - /users/24/profile
      // - /24
      { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
    ],
  },
]
```



## 🌏 라우트 컴포넌트에 Prop 전달하기

component에서 `$route`를 사용하면, 특정 URL에서만 사용할 수 있으므로, 구성 요소의 유연성을 제한하는 경로와의 긴밀한 결합이 생깁니다.

`props`로 동작을 분리 할 수 있다.

```javascript
// Before Replace
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const routes = [{ path: '/user/:id', component: User }]

---------------------------------------------------------------------------
// After Replace
const User = {
  // make sure to add a prop named exactly like the route param
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```

어디서나 구성 요소를 사용할 수 있어 더 쉽게 재사용하고 테스트할 수 있다.



### 👉 Boolean mode

`props`가 true면, `route.params`는 component props로 설정된다.



### 👉 Named Views

named views와 사용할 때 각 named view에 대한 `props`옵션을 설정해야 한다.

```javascript
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false }
  }
]
```



### 👉 Object Mode

props가 객체인 경우 components props로 그대로 설정된다.

props가 정적일때 유용

```javascript
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
```



### 👉 Function Mode

props를 반환하는 함수를 만들 수 있다.

```javascript
const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q })
  }
]
```

URL `/search?q=vue`은 `{query: 'vue'}`를 component에 props로 전달함.

props function은 라우트 변경 시에만 평가되므로 stateless로 유지.

props를 정의하기 위해 state가 필요한 경우 wrapper component를 사용. => 이렇게 하면 vue가 state변경에 반응함.



## 🌏 다양한 History Mode

### 👉 HashMode

`createWebHashHistory()`

내부적으로 전달되는 실제 URL 앞에 해시문자(#)를 사용.

URL의 이 섹션은 서버로 전송되지 않으므로 서버 수준에서 특별한 처리가 필요 없다.

그러나 **그것은 SEO에 나쁜 영향을 미치니, HTML5기록 모드 사용.**

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```



### 👉 HTML5 모드 (권장)

`createWebHistory()`-

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

URL은 "정상"으로 보입니다(예: `https://example.com/user/id`.)

적절한 서버 구성이 없는 단일 페이지 클라이언트 측 앱이라면, 사용자는 브라우저에 직접 `https://example.com/user/id`를 입력하면, <br/>404 error가 발생할 것이다.

서버에 간단한 포괄 대체 경로를 추가하기만 하면된다.

URL이 정적 자산과 일치하지 않으면 같은 `index.html`페이지를 보여주면된다.

[HashMode vs HistoryMode](https://happy-coding-day.tistory.com/entry/Vue-vue-router에서-Hash-Mode-Vs-History-Mode-차이점은-무엇인가)

### 👉 메모리 모드

**`createMemoryHistory()`**

**app.use(router)를 호출하고 초기탐색을 푸시해야함.**

브라우저 환경을 가정하지 않으므로 URL과 상호작용하지 않으며 **초기 탐색을 자동으로 트리거 하지 않음.**

```javascript
import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
  ],
})
```

history가  없어 뒤로이동 또는 앞으로 이동이 불가능함



### 👉 서버 구성 예

아래 링크를 참고

https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations





## 🌏 경고

찾을 수 없는 모든 경로가 이제 index.html 파일을 제공하므로 서버는 더 이상 404 오류를 보고하지 않습니다.

이 문제를 해결하려면 Vue 앱 내에서 포괄 경로를 구현하여 404 페이지를 표시해야 합니다.

```javascript
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})
```



## 📘 참고

[Vue Router 공식문서](https://router.vuejs.org/)

[Vue Router-Korea 공식문서](https://router.vuejs-korea.org/)

https://sunny921.github.io/posts/vuejs-router-03/

[parameter demo](https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1)

[경로 순위 도구](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..)

[빈 중첩경로 예시](https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo)

[Navigation Handling](https://router.vuejs.org/guide/advanced/navigation-failures.html)

[Browser History APIs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

[named-routes 예시](https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js)

[named-views-vue-router 예시](https://codesandbox.io/s/named-views-vue-router-4-examples-rd20l)

[중첩된-named-view 예시](https://codesandbox.io/s/nested-named-views-vue-router-4-examples-re9yl?&initialpath=%2Fsettings%2Femails)

[SEO대한 참고사항](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?hl=en&visit_id=637964876397609759-3728726085&rd=1)

[서버 구성 예](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

[HashMode vs HistoryMode](https://happy-coding-day.tistory.com/entry/Vue-vue-router에서-Hash-Mode-Vs-History-Mode-차이점은-무엇인가)