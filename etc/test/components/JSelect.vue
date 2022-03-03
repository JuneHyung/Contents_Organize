<template>
   <a-select
   v-model:value="getData.selected"
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
import { ref} from 'vue';
export default {
  props:['data','dataList'],
  setup(props){
    const getData = ref(props.data)
    const getDataList = ref(props.dataList)
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
      getData,
      getDataList,
    }
  }
}
</script>

<style>

</style>