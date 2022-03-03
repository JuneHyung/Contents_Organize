<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div style="width:500px; height:500px; margin: 0 auto; border:1px solid black" >
  <div style="padding:4px"> 
    <j-input :data="searchInfo"></j-input>
  </div>
  <div style="height:20px">{{searchInfo.astsId}}</div>
  <div style="padding:4px"> 
    <j-input-number :data="searchInfo"></j-input-number>
  </div>
  <div style="height:20px">{{searchInfo.inputNumber}}</div>

  <div style="padding:4px"> 
    <j-select :data="searchInfo" :dataList="selectList"></j-select>
  </div>
  <div style="height:20px">{{searchInfo.selected}}</div>
  </div>
  
  <button @click="outputTest">출력Test</button>

</template>

<script>
import { ref } from 'vue'
import JInput from './components/JInput.vue'
import JInputNumber from './components/JInputNumber.vue'
import JSelect from './components/JSelect.vue'
export default {
  name: 'App',
  components: {
    JInput,
    JInputNumber,
    JSelect,
  },
  setup(){
    const searchInfo = ref({
      astsId: null,
      inputNumber: null,
      selected: null,
    });
    const inputNumber = ref(null);
    const selected = ref(null);
    const selectList = ref([
      {
        dtlNm: '1번',
        dtlCd: '1'
      },
      {
        dtlNm: '2번',
        dtlCd: '2'
      },
      {
        dtlNm: '3번',
        dtlCd: '3'
      },

    ])
    const outputTest = function(){
      console.log(searchInfo.value.astsId);
    }
    return{
      searchInfo,
      inputNumber,
      selected,
      selectList,
      outputTest,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
