```vue
<template>
  <input type="text" v-model="data"/>
  <prop-test :data="data"></prop-test>
</template>
<script>
import { defineComponent, ref } from 'vue';
import PropTest from './../components/PropTest';
export default defineComponent({
  name: 'PageIndex',
  
  components:{
    PropTest: PropTest,
  },
  setup(props){
    const data = ref('');
    
    return{
      data,
    }
  }
})

</script>
```



```vue
// PropsTest
<template>
  <input v-model="getData"/>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
export default {
 props:['data'],
  setup(props){
    const getData = computed({
      get:()=>props.data,
      set:(val)=> {
        console.log(val)
      }
    })
    return{
      getData
    }
  }
}
</script>

<style>

</style>
```





