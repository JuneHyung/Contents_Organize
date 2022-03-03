### Input

```vue
<template>
    <div class="input-wrap-box">
        <input id="input" type="text" class="ellipsis" v-model="inputData" />
        <span id="clearBtn" @click="allowClear">x</span>
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
        return {
            inputData,
            allowClear,
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
.input-wrap-box:hover #clearBtn {
    opacity: 1;
}
#clearBtn {
    opacity: 0;
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
}
</style>

```



### InputNumber

```vue
<template>
    <div class="input-wrap-box">
        <input
            id="input"
            type="number"
            pattern="([0-9]{1,3}).([0-9]{1,3})"
            step="3"
            class="ellipsis"
            v-model="inputData"
        />
        <span id="clearBtn" @click="allowClear">x</span>
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
        return {
            inputData,
            allowClear,
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
}
</style>

```



### Select

```vue
<template>
    <div>
        <div class="input-wrap-box">
            <input
                id="input"
                type="text"
                @focus="openVisible"
                @keydown="inputArrow"
                class="ellipsis"
                v-model="inputData"
            />
            <span id="clearBtn" @click="allowClear">x</span>
            <div v-show="visible" id="listBox">
                <template v-for="(item, idx) in list" :key="idx">
                    <input class="item" @click="selectedItem(item)" readonly :value="item.dtlNm" />
                </template>
            </div>
        </div>

        <div class="resultBox ellipsis">{{ inputData }}</div>
    </div>
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
        const itemBox = ref(null);
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

        const openVisible = function () {
            visible.value = true;
        };
        const closeVisible = function () {
            visible.value = false;
        };
        const inputArrow = function (e) {
            console.log(e);
            switch (e.keyCode) {
                case '37':
                    console.log('left');
                    console.log(itemBox.value);
                    break;
                case '38':
                    console.log('up');
                    break;
                case '39':
                    console.log('right');
                    break;
                case '40':
                    console.log('down');
                    break;
            }
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
}
</style>

```



### datepicker

```vue
<template>
    <div class="input-wrap-box">
        <input id="input" type="text" class="ellipsis" v-model="inputData" />
        <span id="clearBtn" @click="openCalendar">ㅁ</span>
    </div>
    <div class="calendarBox" v-show="visible">
        <!-- <Calendar></Calendar> -->
        <a-date-picker v-show="visible"></a-date-picker>
    </div>
    <div class="resultBox ellipsis">{{ inputData }}</div>
</template>

<script>
import { ref } from 'vue';
// import { Calendar } from 'ant-design-vue';
export default {
    components: {
        // Calendar,
    },
    setup() {
        const inputData = ref(null);
        const allowClear = function () {
            inputData.value = null;
        };
        const openCalendar = function () {
            visible.value = !visible.value;
        };
        const visible = ref(false);
        return {
            inputData,
            allowClear,
            visible,
            openCalendar,
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
}

.calendarBox {
    height: 200px;
    border: 1px solid #d9d9d9;
}
</style>

```

