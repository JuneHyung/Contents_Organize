# π³Template Refs

Vueμ μ μΈμ  λ λλ§ λͺ¨λΈμ λλΆλΆμ μ§μ  DOM μμμ μΆμννμ§λ§ <br/>κΈ°λ³Έ DOM μμμ μ§μ  μ‘μΈμ€ν΄μΌ νλ κ²½μ°κ° μμ μ μλ€.

refμμ±μ μ¬μ©.

```vue
<input ref="input">
```

λ§μ΄νΈλ νΉμ  DOM μμ λλ μμ κ΅¬μ± μμ μΈμ€ν΄μ€μ λν μ§μ  μ°Έμ‘°λ₯Ό μ»μ μ μμ΅λλ€. 



## π Ref on Component

child Componentμμλ refλ₯Ό μ¬μ©ν  μ μλ€.

```vue
<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
  }
}
</script>

<template>
  <Child ref="child" />
</template>
```

μ°Έμ‘°λ μΈμ€ν΄μ€λ μμ κ΅¬μ±μμμ λμΌ.

**β λΆλͺ¨ κ΅¬μ± μμλ μμ κ΅¬μ± μμμ λͺ¨λ  μμ±κ³Ό λ©μλμ λν μ μ²΄ μμΈμ€ κΆνμ κ°μ§λ€.**

λΆλͺ¨μ μμ κ°μ λ°μ νκ² κ²°ν©λ κ΅¬ν μΈλΆ μ λ³΄λ₯Ό μ½κ² μμ±ν  μ μμΌλ―λ‘ κ΅¬μ± μμ μ°Έμ‘°λ μ λμ μΌλ‘ νμν  λλ§ μ¬μ©ν΄μΌ ν©λλ€. 

λλΆλΆμ κ²½μ° νμ€ propsλ₯Ό μ¬μ©νμ¬ λΆλͺ¨/μμ μνΈ μμ©μ κ΅¬ννκ³  μΈν°νμ΄μ€λ₯Ό λ¨Όμ  λ΄λ³΄λ΄μΌ ν©λλ€.



## π expose

exposeμ΅μμ μ¬μ©ν΄ μμ μΈμ€ν΄μ€μ λν μ‘μΈμ€λ₯Ό μ νν  μ μμ΅λλ€.

```vue
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      /* ... */
    },
    privateMethod() {
      /* ... */
    }
  }
}
```



## π Example Code

### App.vue



```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div style="width:600px; height:600px; margin:0 auto">
    <button @click="setRowData">γγμλΌκ³ λλ μ λ°</button>
    <div>
      <ag-grid ref="meta"></ag-grid>
    </div>
  </div>

</template>
<script>
import {ref, onMounted} from 'vue';
import AgGrid from './components/AgGrid.vue';

export default {
  components:{AgGrid},
  setup() {
	const meta = ref(null);
    ...
    onMounted(()=>{
      console.log(`rowData : ${JSON.stringify(meta.value.rowData)}`);
      console.log(`columnDefs : ${JSON.stringify(meta.value.columnDefs)}`);
      console.log(`gridOptions : ${meta.value.gridOptions}`);
      setColumnDefs();
    })
   
    return {
      meta,
      rowData,
      columnDefs,
      
      setRowData,
    }
  },
}
</script>

<style>
...
</style>

```



### Default Data

```vue
const gridApi = ref(null);
const columnDefs = ref([{ headerName: "Make", field: "make" }]);
const rowData = ref([{ make: "Toyota", model: "Celica", price: 35000 }]);
const gridOptions = ref({
      defaultColDef:{
        sortable: true,
        cellRendererFramework: CommonRender,
      }
    })
```



### 1. expose none

```vue
setup(){
    ...
    return{
      gridApi, columnDefs, rowData, handleGridReady, gridOptions
    }
  }
```

![expose-none](./expose-rowData,columnDefs.png)

### 2. expose - rowData

```vue
setup(props, {expose}){
    ...
	expose({rowData})
    return{
      gridApi, columnDefs, rowData, handleGridReady, gridOptions
    }
  }
```

![expose-rowData](./expose-rowData,columnDefs.png)

### 3. expose - rowData, columnDefs

```vue
setup(props, {expose}){
    ...
	expose({rowData, columnDefs})
    return{
      gridApi, columnDefs, rowData, handleGridReady, gridOptions
    }
  }
```

![expose-rowData,columnDefs](./expose-rowData,columnDefs.png)

## π μ°Έκ³ 

[vuejs.org](https://vuejs.org/guide/essentials/template-refs.html)