<template>
   <a-select
    placeholder="Select users"
    :allowClear="true"
    show-search
    size="small"
    :filter-option="true"
    :style="{width: boxWidth+'px', height:20+'px', borderColor: boxBgColor}"
  >
    <a-select-option v-for="(item, idx) in getDataList" :key="idx" :value="item.dtlCd">
      {{item.dtlNm}}
    </a-select-option>
  </a-select>
</template>

<script>
import { ref, computed} from 'vue';
export default {
  props:['data','dataList'],
  setup(props){
    const getDataList = computed({
      get:()=>props.dataList,
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
      boxWidth,
      changeBackground,
      boxBgColor,
      handleCtrlC,
      handleCtrlX,
      handleCtrlV,
      getDataList,
    }
  }
}
</script>

<style>

</style>