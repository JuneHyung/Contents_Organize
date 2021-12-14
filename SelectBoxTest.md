```vue
<template>
<div class="inputWrap">
    <div style="position:absolute; top:0; z-index:999; background-color:lightgrey">
      <div v-for="(item, idx) in valueOptions" :key="idx" style="width:100px; height:20px; background-color:red">{{item}}</div>
    </div>
</div>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
 
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup(){
    const target = ref('');
    const valueOptions = ref(['apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05','apple01','bpple02','cpple03','dpple04','epple05',]);
    const filterOption = function(){
      let tmp = [];
      valueOptions.value.forEach(el=>{
        if(target.value==valueOptions.value){
          tmp.push(el)
        }
      })
      valueOptions.value = tmp
    }
    return{
      target,
      valueOptions,
      filterOption
    }
  }
})

</script>
<style scoped>
.inputWrap{
  height:50px;
  border:1px solid  black;
  overflow-y:scroll
}
</style>
```

