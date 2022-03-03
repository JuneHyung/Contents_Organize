# 🚀 Front End Convention

## 📝 Naming Rule

### 종류

* 😀 **PascalCase** : 단어 시작때마다 대문자 사용<br/>ex) ThisIsAVariable
* 🐪 **camelCase** : 첫단어는 소문자, 그 다음 부터는 대문자<br/>ex) thisIsAVariable
* 🐔 **kebab-Case** : 모두 소문자로 단어와 단어사이 -를 이용.<br/>ex) this-is-a-variable
* 🐍 **SNAKE_CASE** : 모두 대문자로 단어사이 _를 사용.<br/>ex) THIS_IS_A_VARIABLE
* 🏳 **Underscore** : 단어마다 _로 구분<br/>ex) this_is_a_variable, This_IS_A_Variable
* 🇭🇺 **sHungarian** : 각 변수마다 특성을 앞에 기술<br/>sThisIsAVariable, sThis_is_a_variable<br/>접두어 f : flag / c : counter / l : long / p : pointer / u : unsigned int<br/>권장X



**주로 파스칼케이스와 카멜케이스를 사용**하였음.

**단어의 선택은 구글번역기 기준으로 검색하면 나오는 단어**를 주로 사용.



## ❓ 변수명

딱히 정하진 않았지만 **카맬케이스**를 사용.

const를 주로 사용. 값이 변경될 경우 let



## ❗ 메소드명

**카멜케이스**를 사용.

**앞에 동작, 뒤에 명사**를 사용.

**통신을 하는경우** post, get, put, delete의 경우 **post**ㅇㅇㅇ, **get**ㅇㅇㅇ, **update**ㅇㅇㅇ, **delete**ㅇㅇㅇ사용.

이동의 경우 **vue파일에선 go파일이름, move.js에서는 move파일이름** 을 사용.

event handleing은 on이나 handle을 앞에 안붙이고, 동작하는 메소드명을 넣음.



## 📫 vuex에서 메소드명

actions는 **스네이크케이스**, 나머지는  **카멜케이스** 

### 👉 gettters

get변수명



### 👉 mutation

* set변수명 : 가져온 데이터를 추가할때.
* toggle변수명 : 어떤 flag를 바꿀때
* delete변수명 : 내용을 비울때(초기화할때)



### 👉 actions

예외로 vuex에서 **actions의 경우 스네이크케이스를 사용**<br/>ex) postTodoList()의 경우 POST_TODOLIST



## 🎯 CSS 클래스명, ID명

왠만하면 클래스명으로 사용하고, **class, id둘다 카멜케이스**를 사용.

제목 : 파일이름Title

내용 : 파일이름Contents

어떠한 div들 ㅇㅇㅇBox. 이때, div가 안쪽이면 innerBox, 밖쪽이면 outterBox, 배경이면 bgBox를 주로 사용. 따로 정하지 않고, 사용.

```html
<div class="todoOuterBox">
    <div class="todoInnerBox">
        <p>
            내용이여유
        </p>
    </div>
</div>
```





---



## 🎲 폴더 관리

**폴더 이름은 항상 소문자**를 사용.
**파일 이름은 파스칼 케이스**를 사용

### 👉 template구조( 주로 사용한 구조 )

```vue
<template>
    <header></header>
    <router-view/>
    <footer></footer>
</template>
```



### 👉 views폴더 or layout폴더 : 

페이지 이동시 보여줄 페이지들



### 👉 component 

공통은 commons폴더, views이름의 폴더안에 그 페이지에서 사용할 컴포넌트 작성



### 👉 css : assets - css폴더

views이름의 폴더안에 그 페이지에서 사용할 이미지 등록



 ### 👉 img : assets폴더 - images 폴더

views이름의 폴더안에 그 페이지에서 사용할 이미지 등록



### 👉 api : api폴더

* axios.js : axios 객체생성
* move.js : 페이지이동 (라우터)관련 메소드
* 그 외 : view이름.js<br/>각 페이지에서 사용할 api주소만 return



## 📫 Vuex(store) 관리

vuex는 주로 다른 컴포넌트와 공유할 데이터가 있는경우만 사용.

1. vue에서 dispatch를 사용하여 actions에 접근.
2. actions에서는 api를 호출하여 commit을 사용해 mutation으로 data를 보낸다.
3. mutation은 넘어온 데이터를 state에 저장한다. (LifeCycle에 따름.)

### 👉 vue에서의 호출

axios를 이용해 데이터를 가져와야할 경우 dispatch를 이용해 actions에 접근.
state의 상태만 바꿀 경우 commit으로 mutation에 접근해 상태만 바꿈.

```vue
this.$store.dispatch('GET_APPEND_LIST', this.start);
this.$store.commit('toggleState', 'Visit');
```



### 👉 state 

컴포넌트에서 사용할 변수명 저장.



### 👉 getters 

state의 데이터를 가져올 때 사용

```vue
getCatsDetail(state) {
      return state.catsDetail;
    }
```



### 👉 mutation

state등록 메서드

```vue
setVisits(state, visits) {
    visits.forEach(el => {
        state.visits.push(el);
    })
},
```



### 👉 actions

api를 호출하여 data를 mutation으로 넘긴다.

```vue
GET_APPEND_LIST({ commit }, start) {
    return getAppendList(start)
        .then(({ data }) => commit('setCats', data))
        .catch(err => console.log(err));
},
```



---



## 🥥 공백

tabSize는 주로 4칸을 사용.<br/>

( 다른 환경에서도 똑같이 적용하기 위해 2칸사용을 권장하기는 하지만, 가독성을위해 의논하에 4칸결정해서 사용)



---



## 🎢 정렬 순서

여태 사용해온순서

* template
* script
  * import
  * export
    * components
    * computed
    * props
    * data
    * created
    * mounted
    * method
* style



### 👉 StyleGuide (vue 2) 참고.

https://kr.vuejs.org/v2/style-guide/index.html

* 컴포넌트이름에 합성어사용.
* 컴포넌트 data는 반드시함수여야함. (`data` 의 값이 오브젝트일 경우, 컴포넌트의 모든 인스턴스가 공유한다)
* Props정의는 가능한 상세하게 정의되야함
* v-for에 key지정.
* v-if와 v-for를 동시에 사용X
* 컴포넌트 스타일에 scope사용.

등등



## 🌌 그 외 생각나는것들

template, style, js 좌쯕끝부터 시작해 태그마다 1탭씩.

```vue
<template>
	<div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
	    </ul>
    </div>
</template>
<script>
import ,,,
export default {
    name: '',
    components:{...}.
    computed:{...}.
	data(){
    	return {
            dd:[],
        }
	},
    created(){...},
    methods:{...}
}
</script>
<style scoped>
.title{
	text-align:center;
}
</style>
```



주석은 주석문 뒤에 공백1칸을 주고 작성.

작성시 주로 주석에 해당하는 구문 위나 옆에 작성.

```javascript
//주석입니다.(x)
// 주석입니다.(o)
```



forEach시 요소에 el사용

```javascript
arr.forEach((el)=>{
    return el
})
```



작업중 어떤 변수를 만들어 잠시 저장해둘때 주로 tmp사용

```javascript
const tmp = {a,b}
arr.push(tmp);
```

