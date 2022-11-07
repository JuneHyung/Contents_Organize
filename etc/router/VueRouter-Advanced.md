# 🐳 Vue-Router Advanced

## Navigation Guards

Navigation Guard는 주로 탐색을 리디렉션 하거나 취소하여 탐색을 보호하는 역할

> **❗ 매개변수나 쿼리 변경으로 인해 navigation guards에 들어가거나 나가지 않음.**
>
> `$route`객체를 관찰하여 변경사항에 반응하거나 `beforeRouteUpdate`를 사용할 수 있다.



###  Global Before Guards ✔

**`router.beforeEach`**

```javascript
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  return false
})
```

전역 before guards가 탐색이 트리거 될때마다 생성 순서대로 호출됨.

비동기식이며, 모든 hook가 해결되기 전에 탐색이 보류 중인것으로 간주됨.



**모든 가드 함수는 3개의 인수를 받음**

```javascript
router.beforeEach(function (to, from, next) {
  // to : 이동할 url
  // from : 현재 url
  // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
});
```

* **to**: Route - 이동할 url 정보가 담긴 라우터 객체
* **from**: Route - 현재 url 정보가 담긴 라우터 객체
* **next**: Function - to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수

> **next()** : 다음으로 이동
>
> **next(false)** : 탐색을 중단. 브라우저의 URL이 변경된 경우 from경로로 재설정됨.
>
> **next('/') 또는 next({path: '/'})** : 다른 위치로 리디렉션
>
> **next(error)** : version 2.4.0+<br/>next에 전달된 인수가 Error의 인스턴스인 경우 탐색이 중단되고, `router.onError()`를 통해 등록된 콜백에 오류가 전달됨.

`router.beforeEach()`를 호출하고 나면 모든 라우팅이 대기상태가 됨.

전역가드를 설정했기 때문에 화면이 전환되지 않음. 

**그래서 해당 url로 라우팅 하기 위해서 next()를 호출해줘야함.**

**Example**

인증되지 않은 경우 사용자에게 리디렉션 하는 예

```javascript
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // 사용자가 인증되지 않은 경우 `next`가 두 번 호출됩니다
  next()
})
```

```javascript
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```



### Global Resolve Guards

`router.beforeResolve`

모든 in-component 가드와 비동기 라우터 컴포넌트가 종료 된 후, **네비게이션이 승인되기 바로 전에 호출**된다는 것



### Global After hooks

hook후에 전역을 등록할 수 있지만, 가드와 달리 **`next`기능을 얻지 못하고 탐색에 영향 줄수 없다.**

```javascript
router.afterEach((to, from) => {
  // ...
})
```



### Route별 가드

`beforeEnter`

전체 라우팅이 아닌 특정 라우팅에 대해서 가드를 설정하는 방법.

구성 객체에서 직접 가드 를 정의.

global before guard와 같은 효과

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```



### In-Component guard

라우터로 지정된 특정 컴포넌트에 설정되는 가드

* beforeRouteEnter
* beforeRouteUpdate
* beforeRouteLeave

```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
   ...
  },
  beforeRouteUpdate(to, from, next) {
      ...
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
}
```

**beforeRouterEnter**

이 component를 렌더링하는 경로가 확인되기 전에 호출됩니다.
새로 진입하는 컴포넌트가 생성되기 전에 호출되기 때문에 `this`사용 불가.
`next`함수 콜백은 네비게이션 승인 후 호출되서 콜백을 전달해 인스턴스 액세스 가능

`befoureRouterEnter`만 next콜백을 지원.<br/>(**나머지는 `this`가 사용 가능**하기 때문에 전달할 필요가 없기 때문에 지원X)

```javascript
beforeRouteEnter (to, from, next) {
  next(vm => {
    // access to component instance via `vm`
  })
}
```



**beforeRouteUpdate**

 화면에 표시된 컴포넌트가 변경될 때 수행될 로직

```javascript
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```



**beforeRouteLeave**

화면에 표시한 url 값이 변경되기 직전의 로직.

next(false)를 호출하여 탐색 취소가능

```javascript
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```



## 전체 Navigation Flow

1. 탐색이 실행
2. 비활성화된 컴포넌트에서 `beforeRouteLeave` 가드를 호출.
3. global `beforeEach`가드를 호출.
4. 재사용된 컴포넌트에서 `beforeRouteUpdate`가드를 호출
5. route config에서 `beforeEnter`를 호출 합니다.
6. 비동기 라우트컴포넌트를 해결
7. 활성화된 컴포넌트에서 `beforeRouteEnter`가드가 호출.
8. 글로벌 `beforeResolve`가드를 호출.
9. Navigation 완료
10. global `afterEach`후크를 호출.
11. DOM 업데이트가 트리거.
12. beforeRouteEnter 가드의 next 함수에 전달된 콜백 함수가 호출 됨.



## Route Meta Fields

`meta`

경로에 임의의 정보를 첨부 할 수 있는 속성.

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```

**Example**

전역 탐색 가드에서 메타 필드를 확인하는 것.

```javascript
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
```



## Transitions

transition component를 사용하여 전환 효과를 적용할 수 있다.

참고 : [Vue 공식문서 - Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)

```javascript
<transition>
    <router-view></router-view>
</transition>
```



### Route transition - 경로별 전환

모든 경로에 대해 동일한 전환을 적용

각 경로(route)의 구성요소가 서로 다른 Transition을 갖도록 하려면 각 경로 component내에서 다른 name으로 사용

```javascript
const Foo = {
  template: `
    <transition name="slide">
      <div class="foo">...</div>
    </transition>
  `
}

const Bar = {
  template: `
    <transition name="fade">
      <div class="bar">...</div>
    </transition>
  `
}
```



###  Route-Based Dynamic Transition - 경로기반 동적 Transition

대상 경로와 현재 경로 간의 관계에 따라 동적으로 사용할 전환을 결정가능.

참고 예제 : [Transition Example](https://github.com/vuejs/vue-router/blob/dev/examples/transitions/app.js)

```html
<!-- use a dynamic transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```

```javascript
// then, in the parent component,
// watch the `$route` to determine the transition to use
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
```



## Data Fetching

경로가 전환될 때 서버에서 데이터를 가져와야 하는 경우.<br/>예를 들어 사용자 프로필을 렌더링 전에 서버에서 가져오는 경우 2가지 방법이 있다.

* **Fetching After Navigation**
* **Fetching Before Navigation**



### Fetching After Navigation

component를 렌더링 하고 created hook에서 데이터를 가져온다.

네트워크를 통해 데이터를 가져오는 동안 로드 상태를 표시할 수 있는 기회를 제공하며 각 보기에 대해 로드를 다르게 처리할 수도 있습니다.

**Example**

$route.params.id를 기반으로 게시물의 데이터를 가져와야 하는 Post Component

```html
<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```

```javascript
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      const fetchedId = this.$route.params.id
      // replace `getPost` with your data fetching util / API wrapper
      getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```

> created에서 `fetchData()`를 실행함.
>
> `const fetchedId = this.$route.params.id` 를 보면 id를 가져와 getPost를 실행한다.
>
> watch를 살펴보면 `$route`를 등록해 라우트가 변경되었을 때 다시 데이터를 가져올 수 있도록 만들었다.
>
> 받는동안 loading이 true가 되고, 가져오고나서 false가 됨.
>
> loading이 true가 되면
>
> ```html
> <div v-if="loading" class="loading">
>   Loading...
> </div>
> ```
>
> 이 부분이 렌더된다.



### Fetching Before Navigation

새 경로로 이동하기 전에 데이터를 가져온다.

component의 beforeRouteEnter가드에서 데이터 가져오기를 수행할 수 있고, 가져오기가 완료 되고서 next를 호출해야 함.

```javascript
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
```

데이터를 가져오고 next호출전까지는 이전 view가 유지된다.

그렇기 때문에 데이터 가져오는 동안 `프로그레스바`, `인디케이터`등 로딩상태를 화면에 나타내는 것이 좋다.

실패한 경우 실패 메세지를 화면에 출력하는 것이 좋다.<br/>



## Scroll Behavior

`scrollBehavior()`

client측 routing을 사용할 때 새 경로를 탐색할 때 맨 위로 스크롤 하거나 실제 페이지를 다시 로드하는 것처럼 히스토리 항목의 스크롤 위치를 유지할 수 있다.

❗ **브라우저가 `history.pushState` 지원해야한다. <br/>참고 : [History.pushState](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)**

router인스턴스를 생성 할 때  scrollBehavior기능을 제공할 수 있다.

```javascript
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return desired position
  }
})
```

`to`, `from`, `savedPosition`을 인자로 받는다.

* **to** : 이동 후의 router 객체
* **from** : 이동 전의 router 객체
* **savedPosition** : 브라우저 뒤/앞으로 버튼으로 트리거되는 popstate 네비게이션에서만 사용하는 인자.







## 📘 참고

[Vue Router 공식문서](https://v3.router.vuejs.org/)

[Vue.js 라우터 네비게이션 가드 알아보기](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)

https://beomy.tistory.com/75

[Vue 공식문서 - Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)

[Transition Example](https://github.com/vuejs/vue-router/blob/dev/examples/transitions/app.js)

[Progress Indicator](https://story.pxd.co.kr/647)

[History.pushState](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)