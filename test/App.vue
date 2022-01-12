<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div style="width:500px; height:500px; margin: 0 auto; border:1px solid black" >
  <div style="padding:4px"> 
    <j-input v-model:value="input1" :data="input1"></j-input>
  </div>
  <div style="height:20px">{{input1}}</div>
  <div style="padding:4px"> 
    <j-input-number v-model:value="inputNumber" :data="inputNumber"></j-input-number>
  </div>
  <div style="height:20px">{{inputNumber}}</div>
  <div style="padding:4px"> 
    <j-select v-model:value="selected" :data="selected" :dataList="selectList"></j-select>
  </div>
  <div style="height:20px">{{selected}}</div>
  </div>
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
    const input1 = ref(null);
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
    return{
      input1,
      inputNumber,
      selected,
      selectList,
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
