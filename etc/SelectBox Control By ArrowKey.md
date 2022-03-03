```typescript
<template>
    <div ref="wrapBox">
        <div class="input-wrap-box">
            <input
                id="input"
                type="text"
                ref="input"
                @focus="openVisible"
                @keydown="inputArrow"
                class="ellipsis"
                v-model="inputData"
            />
            <span id="clearBtn" @click="allowClear">x</span>
            <div v-show="visible" id="listBox" ref="listBox">
                <input v-for="(item, idx) in list" :key="idx" readonly class="item" :class="{active: idx===focus-1}" :value="item.dtlNm"/>
            </div>
        </div>

    </div>
        <div class="resultBox ellipsis">{{ inputData }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const inputData = ref(null);
        const allowClear = function () {
            inputData.value = null;
        };
        const visible = ref(false);
        
        const list = ref([
            {
                dtlCd: '1',
                dtlNm: '1번가',
            },
            {
                dtlCd: '2',
                dtlNm: '2번가',
            },
            {
                dtlCd: '3',
                dtlNm: '3번가',
            },
            {
                dtlCd: '4',
                dtlNm: '4번가',
            },
            {
                dtlCd: '5',
                dtlNm: '5번가',
            },
            {
                dtlCd: '1',
                dtlNm: '1번가',
            },
            {
                dtlCd: '2',
                dtlNm: '2번가',
            },
            {
                dtlCd: '3',
                dtlNm: '3번가',
            },
            {
                dtlCd: '4',
                dtlNm: '4번가',
            },
            {
                dtlCd: '5',
                dtlNm: '5번가',
            },
            {
                dtlCd: '1',
                dtlNm: '1번가',
            },
            {
                dtlCd: '2',
                dtlNm: '2번가',
            },
            {
                dtlCd: '3',
                dtlNm: '3번가',
            },
            {
                dtlCd: '4',
                dtlNm: '4번가',
            },
            {
                dtlCd: '5',
                dtlNm: '5번가',
            },
        ]);
        const listBox = ref(null);
        const openVisible = function () {
            visible.value = true;
        };
        const closeVisible = function () {
            visible.value = false;
        };
        const focus = ref(1);
        const input = ref(null);
        const inputArrow = function (e) {
            const target = listBox.value.childNodes;
            
            switch (e.keyCode) {
                case 37:
                    console.log('left');
                    break;
                case 38:
                    console.log('up');
                    if (focus.value === null) {
                      focus.value = 1;
                    } else if (focus.value > 0) {
                      focus.value--;
                      target[focus.value].focus();
                    }
                    break;
                case 39:
                    console.log('right');
                    break;
                case 40:
                    console.log('down');

                    if (focus.value === null) {
                      focus.value = 1;
                    } else if (focus.value < list.value.length) {
                      focus.value++;
                      target[focus.value].focus();
                    }
                    break;
                case 13:
                  inputData.value = list.value[focus.value-1].dtlNm
                  break;
            }
            input.value.focus();
        };

        const selectedItem = function (item) {
            inputData.value = item.dtlCd;
            visible.value = false;
        };
        return {
            inputData,
            allowClear,
            list,
            visible,
            openVisible,
            closeVisible,
            inputArrow,
            selectedItem,
            focus,
            listBox,
            input,
        };
    },
};
</script>

<style scoped>
.input-wrap-box input[id='input'] {
    width: calc(100% - 28px);
    height: 20px;
    border: none;
    margin-right: 4px;
}
.input-wrap-box input[id='input']:focus {
    outline: none;
}
.input-wrap-box input[id='input']:focus + .input-wrap-box {
    border: 1px solid #18e918;
}
.input-wrap-box:hover {
    border: 1px solid #18e918;
}
#clearBtn {
    cursor: pointer;
    display: inline-block;
    width: 14px;
    height: 14px;
    padding: 1px;
    line-height: 12px;
    color: white;
    background-color: #bbb;
    border-radius: 0.7rem;
    text-align: center;
    transition: all 0.3s;
}

#clearBtn:hover {
    transform: scale(1.2);
}

.resultBox {
    width: 200px;
}
.input-wrap-box {
    width: 200px;
    height: 24px;
    padding: 1px;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 0.5rem;
    position: relative;
}

#listBox {
    position: absolute;
    top: 28px;
    left: 0;
    border: 1px solid #d9d9d9;
    width: 100%;
    height: 200px;
    overflow-y: scroll;
}
#listBox .item:hover {
    background-color: #00ffcf;
}
.item {
    border: none;
    cursor: pointer;
    height: 24px;
}
.item:focus {
    outline: none;
    border:1px solid orange;
}
input.active{
    border:1px solid orange;
}
</style>
```

