<template>
  <a-input-number 
  v-model:value="getData.inputNumber" 
  size="small" 
  :allowClear="true" 
  :formatter="getData => `${getData}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
  :style="{width: boxWidth+'px', height:20+'px', textAlign:'right'}"></a-input-number>
</template>

<script>
import { ref} from 'vue';
export default {
  props:['data'],
  setup(props){
    const getData =ref(props.data)
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