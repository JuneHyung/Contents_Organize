<template>
  <a-input v-model="getData" size="small" :allowClear="true" @cut="handleCtrlX" @copy="handleCtrlC" @paste="handleCtrlV" :style="{width: boxWidth+'px', height:20+'px', borderColor: boxBgColor}"></a-input>
</template>

<script>
import { ref, computed} from 'vue';
export default {
  props:['data'],
  setup(props){
    const getData = computed({
      get:()=>props.data,
    })
    const changeBackground = function(){
      boxBgColor.value = 'red'
    }
    const boxWidth = ref(120);
    const boxBgColor = ref('none');
    const handleCtrlC = function(){
      boxBgColor.value = 'blue'
    }
     const handleCtrlX = function(){
      boxBgColor.value = '#000'
    }
     const handleCtrlV = function(){
      boxBgColor.value = 'orange'
    }
    return{
      getData,
      boxWidth,
      changeBackground,
      boxBgColor,
      handleCtrlC,
      handleCtrlX,
      handleCtrlV,
    }
  }
}
</script>

<style>

</style>