```vue
<input type="checkbox" v-model="checking" id="check1">
  <label for="check1">
  </label>
  </div>
  <div>{{checking}}</div>


<style>

input[type="checkbox"]{
        display: none;
      }
input[type="checkbox"] + label{
        display: inline-block;
        width: 16px;
        height: 16px;
        border:1px solid #d9d9d9;
        position: relative;
        border-radius:2px;
      }
input[type="checkbox"] + label:hover{
  border:1px solid #1890ff;
  /* border:1px solid red; */
  transition:0.7s;
}
input[id="check1"]:checked + label::after{
  
  content: '✔';
        text-align:center;
        font-size: 12px;
        width: 14px;
        height: 14px;
        line-height:14px;
        animation: check 0.36s ease-in-out;

        color:#fff;
        
        box-sizing:border-box;
        background-color:#1890ff;
        text-align: center;
        position: absolute;
        left: 0;
        top:0;
        display:inline-block
      }
input[id="check1"]:checked + label{
border: 1px solid #1890ff;
/* border:1px solid red; */
}

@keyframes check{
  0%{
    opacity:0;
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    opacity:1;
    background-color:#1890ff;
  }
}
</style>
```

