<template>
  <a-input-number 
  v-model="getData" 
  size="small" 
  :allowClear="true" 
  :formatter="getData => `${getData}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
  :style="{width: boxWidth+'px', height:20+'px', textAlign:'right'}"></a-input-number>
</template>

<script>
import { ref, computed} from 'vue';
export default {
  props:['data'],
  setup(props){
    const getData = computed({
      get:()=>props.data,
      set:(val)=> val
    })
    const boxWidth = ref(120)
    return{
      getData,
      boxWidth,
    }
  }
}
</script>

<style>

</style>