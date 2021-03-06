# ๐ AG-Grid

https://www.ag-grid.com/

๊ณต์๋ฌธ์์ ํ ๋ธ๋ก๊ทธ ์ ๋ฆฌ๊ธ๋ค์ ๋ณด๋ฉด์ ์ ๋ฆฌํด ๋ณผ ์์ 

์ด๋ฒ ๊ธ์ ๊ณต์๋ฌธ์ ํํ ๋ฆฌ์ผ ํ์ด์ง๋ฅผ ๋ณด๊ณ  ์ ๋ฆฌ.



**AG-Grid**

์๋ฐ์คํฌ๋ฆฝํธ ๊ธฐ๋ฐ ์คํ ์์ค ๊ทธ๋ฆฌ๋.

๋ฌด๋ฃ์ ์์ฉ์ด ๊ตฌ๋ถ๋์๋๋ฐ ๋ฌด๋ฃ๋ ์ ๋งํ ๊ธฐ๋ฅ์ ์ง์ํ๊ณ , ์์ฉ์ ๊ฒฝ์ฐ ์๋ฒ์ฌ์ด๋๋๋๋ง, ์์์ถ์ถ, Tree๋ฑ ์ง์ํจ.



## ๐ Add AG Grid

```shell
npm install -g @vue/cli
vue create my-project
```

์ ํํ  ์ต์

* Choose Vue version
* Babel
* CSS Pre-processors (Sass/SCSS - with node-sass)
* ๊ตฌ์ฑ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ  ์์น In dedicated config files



AG Grid NPM ํจํค์ง ์ถ๊ฐ

```shell
npm install ag-grid-vue3 ag-grid-community vue-class-component@next
```



App.vue

```vue
...
<style lang="scss">
  @import "ag-grid-community/dist/styles/ag-grid.css";
  @import "ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
```

๋ง๋ค์ด์ง ๋ด ํ๋ก์ ํธ์ App.vue์์ style๋ถ๋ถ์ ๋ค์๊ณผ๊ฐ์ด ์์ .

ag-grid.css : ๊ทธ๋ฆฌ๋ ๊ตฌ์กฐ ์คํ์ผ ์ํธ

theme์ค ํ๋์ธ ag-theme-alpine.css๋ฅผ ๊ฐ์ ธ์ด.



### ๐ ํ๋ง์ ์ข๋ฅ

* ag-theme-alpine : ๋ชจ๋ํ ์คํ์ผ, ๋์ contrast, ์ผ๋ฐ์ ์ธ padding๊ฐ์ด ์ ์ฉ๋จ.
* ag-theme-apline-dark : alpine์ dark๋ฒ์ 
* ag-theme-balham : alpine๋ณด๋ค ๊ทธ๋ฆฌ๋ ๊ฐ๊ฒฉ๊ณผ ํฐํธ๊ฐ ์ข๋ ์๊ณ  ์ด์ดํฉ๋๋ค. ๋ฐ์ดํฐ๋ฅผ ์ข๋ ๋ง์ด ๋ณด์ฌ์ค.
* ag-theme-balham-dark : balham์ dark๋ฒ์ 
* ag-theme-material : ๊ตฌ๊ธ์ material ๋์์ธ ์คํ์ผ. ์ ์์์ ๋ฐ์ดํฐ๋ฅผ ์ฌ์ ์๊ฒ ๋ณด์ฌ์ค ๋ ์ ์ฉ.



## ๐ Example Code 

๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅํ๋๋ฐ ์ค์ํ ๊ฒ์ **rowData์ columDefs**.<br/>

(AG Grid API์ GridOptions๋ฑ๋ ์ค์ํ๋ค! ์ถํ์ ๋ค๋ฃฐ์์ )

columDefs๋ ์ด์์ฑ์, rowData๋ ์ถ๋ ฅ๋  ๋ฐ์ดํฐ๋ค.



### ๐ ์์ํ๊ธฐ

```vue
<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
</template>
```

**rowData์ columDefs** ์ด ๋๊ฐ์ง ์์ฑ์ ๋ฐ์ธ๋ฉํ์ฌ AG-๊ทธ๋ฆฌ๋ ๊ตฌ์ฑ ์์ ์ ์ .



```vue
<script>
    import { AgGridVue } from "ag-grid-vue3";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            this.columnDefs = [
                { field: 'make' },
                { field: 'model' },
                { field: 'price' }
            ];

            this.rowData = [
                { make: 'Toyota', model: 'Celica', price: 35000 },
                { make: 'Ford', model: 'Mondeo', price: 32000 },
                { make: 'Porsche', model: 'Boxter', price: 72000 }
            ];
        }
    }
</script>
```

์ด๋ ๊ฒ ํ๋ฉด ์ด๋ป๊ฒ ๋ ๊น?

colum์ผ๋ก make, model, pice๋ฅผ ๊ฐ์ง๊ณ ,<br/>rowData์ make๊ฐ์ 'Toyota', model๊ฐ์ 'Celica', price๋ 35000 ... ํด์ 3๊ฐ์ง ๋ฐ์ดํฐ๊ฐ ์๋์ฒ๋ผ ๋์ฌ๊ฒ์ด๋ค.

|  Make   | Model  | Price |
| :-----: | :----: | :---: |
| Toyota  | Celica | 35000 |
|  Ford   | Mondeo | 32000 |
| Porsche | Boxter | 72000 |



### ๐ ์ ๋ ฌ ๋ฐ ํํฐ๋ง

**์ ๋ ฌ**์ ํ๊ณ ์ถ๋ค๋ฉด? =>  **sortable์์ฑ**์ true๋ก ์ค์ ํ๋ฉด๋๋ค.

```vue
this.columnDefs = [
	{ field: 'make', sortable: true },
    { field: 'model', sortable: true },
    { field: 'price', sortable: true }
]
```

ํค๋๋ฅผ ํด๋ฆญํ๋ฉด ์ค๋ฆ์ฐจ์, ๋ด๋ฆผ์ฐจ์ ๋ฐ ์ ๋ ฌ ์ํจ์ ์ ํํจ.



๋ฐ์ดํฐ๊ฐ ๋ง์์ง๊ฒ ๋๋ฉด ํน์  ๋ฐ์ดํฐ๋ฅผ ์ฐพ๊ธฐ ์ด๋ ค์์ง๋ค => ํํฐ๋ง์ด ํ์ํ๋ค.<br/>์ด ๊ฒฝ์ฐ **filter์์ฑ์ true๋ก** ํ์ฌ **ํํฐ๋ง์ ํ์ฑํ** ์ํจ๋ค. 

<img src="./readme_images/filter.jpg"/>



### ๐ ์๊ฒฉ ๋ฐ์ดํฐ ๊ฐ์ ธ์ค๊ธฐ

์๊ฒฉ ์๋ฒ์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์๋ณด์.

```vue
beforeMount() {
    this.columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];

    fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
        .then(result => result.json())
        .then(rowData => this.rowData = rowData);
}
```

ํด๋น ์ฃผ์์์ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ฅผ rowData์ ๋ฃ์ด์ค๋ค.

(์์ ๋ fetch๋ฅผ ์ด์ฉํ์ง๋ง ๋์ ๊ฒฝ์ฐ์ axios๋ฅผ ์ด์ฉํด ๊ฐ์ ธ์ฌ ์์ )



### ๐ ์ ํ ํ์ฑํ

๊ทธ๋ฆฌ๋์์ ํน์  ํ์ ์ ํํ๊ณ , ์์คํ์์ ํ๋๊ทธ๊ฐ ์ง์ ๋ ๊ฒ์ผ๋ก ํ์ํ๋๋ก ํ์ฉํด์ผํจ.

#### ์ ์ฒด ์ฝ๋

```vue
<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        rowSelection="multiple">
    </ag-grid-vue>
</template>
```

```vue
<script>
import {AgGridVue} from "ag-grid-vue3";

export default {
   name: 'App',
   data() {
       return {
           columnDefs: null,
           rowData: null,
           gridApi: null,
           columnApi: null
       }
   },
   components: {
       AgGridVue
   },
   beforeMount() {
       this.columnDefs = [
           {field: 'make', sortable: true, filter: true, checkboxSelection: true},
           {field: 'model', sortable: true, filter: true},
           {field: 'price', sortable: true, filter: true}
       ];

       fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
               .then(result => result.json())
               .then(rowData => this.rowData = rowData);
   }
}
</script>

<style lang="scss">
@import "ag-grid-community/dist/styles/ag-grid.css";
@import "ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
```



#### ์ดํด ๋ณด์

```vue
<template>
	<ag-grid-vue style="width: 500px; height: 500px;"
        ...
        rowSelection="multiple">
    </ag-grid-vue>
</template>
```

rowSelection์ multipe๋ก ์ฃผ์ด ์ฌ๋ฌ ํ ์ ํ์ ํ์ฑํ.

```vue
beforeMount(){
	this.columnDefs = [
		{field: 'make', sortable: true, filter: true, checkboxSelection: true},
		{field: 'model', sortable: true, filter: true},
		{field: 'price', sortable: true, filter: true}
	]
}
```

'make' field๋ฅผ ๋ณด๋ฉด checkboxSelection์ true๋ก ํ์์ต๋๋ค.

์ด๋ฅผ ํตํด make์์ ์ฒดํฌ๋ฐ์ค๊ฐ ์๊ธด๊ฑธ ๋ณผ ์ ์์ต๋๋ค.

<img src="./readme_images/checkboxSelection.jpg"/>



### ๐ ์ ํ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ์๋ฒ๋ก ๋ณด๋ด๊ธฐ

AG Grid API๋ฅผ ์ฌ์ฉ

gridReady์ด๋ฒคํธ์ ๊ทธ๋ฆฌ๋ ๋ฐ ์ด API ๋ชจ๋์ ๋ํ ์ฐธ์กฐ๋ฅผ ์ ์ฅํจ.

#### ์ ์ฒด ์ฝ๋ 

```vue
<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>

        <ag-grid-vue style="width: 500px; height: 500px;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
            rowSelection="multiple"
            @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>
<script>
    import { AgGridVue } from "ag-grid-vue3";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
                gridApi: null,
                columnApi: null
            }
        },
        components: {
            AgGridVue
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
            },
            getSelectedRows() {
                const selectedNodes = this.gridApi.getSelectedNodes();
                const selectedData = selectedNodes.map( node => node.data );
                const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ');
                alert(`Selected nodes: ${selectedDataStringPresentation}`);
            }
        },
        beforeMount() {
            this.columnDefs = [
                { field: 'make', checkboxSelection: true },
                { field: 'model' },
                { field: 'price' }
            ];

            fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
                .then(result => result.json())
                .then(rowData => this.rowData = rowData);
        }
    }
</script>

<style lang="scss">
...
</style>
```



#### ์ดํด ๋ณด์

```vue
<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>

        <ag-grid-vue style="width: 500px; height: 500px;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
            rowSelection="multiple"
            @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>
```

์ ๋ฒํผ์ ์ ํ๋๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ์๋ฒ๋ก ๋ณด๋ด๋ ๋ฒํผ.

`gridReady`์ด๋ฒคํธ ์ ๊ทธ๋ฆฌ๋ ๋ฐ ์ด API ๋ชจ๋์ ๋ํ ์ฐธ์กฐ๋ฅผ ์ ์ฅํจ.

```vue
...
<script>
...
methods: {
    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
    },
    getSelectedRows() {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
},
</script>
```

์ฌ๊ธฐ์ ์ฌ์ฉ๋ api๋ getSelectedNodes๋ค.<br/>**getSelectedNodes** : ์ ํํ ๋ธ๋๋ชฉ๋ก์ ๋ฐํํจ. ๋ฐ์ดํฐ๊ฐ ์๋ ๊ธฐ๋ณธ ๋ธ๋๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ์ ๋ธ๋๋ฅผ ์ํํ  ์ ์์ผ๋ฏ๋ก ํธ๋ฆฌ/์ง๊ณ ๋ฐ์ดํฐ๋ก ์์ํ  ๋ ์ ์ฉํฉ๋๋ค.

> 1.๋ฒํผ์ ํด๋ฆญํ๊ฒ ๋๋ฉด getSelectedRows ๋ฉ์๋๊ฐ ์คํ๋๊ณ , ์ฌ๊ธฐ์ getSelectedNodes()๋ฉ์๋๋ก ์ ํํ ๋ธ๋๋ชฉ๋ก์ ๋ฐํํ๋ค.<br/>2.์ ํ๋ ๋ธ๋์ data๋ค์ map์์ด์ฉํ์ฌ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ง๋ค์ด selectedData์ ์ ์ฅ.<br/>3.ํ๋์ ์คํธ๋ง์ผ๋ก ๋ง๋ค์ด์ `selectedDataStringPresentation`์ ์ ์ฅ.<br/>ํํ๋ join์ผ๋ก ์ฝค๋ง๋ฅผ ๊ธฐ์ค์ผ๋ก ์ฐ๊ฒฐํ์ฌ `make๊ฐ model๊ฐ, make๊ฐ model๊ฐ, ...`
>
> 
>
> [
>
>  { make: 'Toyota', model: 'Celica', price: 35000 },
>
>  { make: 'Ford', model: 'Mondeo', price: 32000 },
>
>  { make: 'Porsche', model: 'Boxter', price: 72000 }
>
> ] << ์ด ๋ฐฐ์ด์ด
>
> ์๋์ฒ๋ผ ๋ณ๊ฒฝ๋จ.
>
> Toyota Celica, Ford Mondeo, Porsche Boxter

โ ์์ ์์ ๋ค๋ฃฌ ์ฝ๋๋ ๊ฐ๋ตํ๊ฒ ๋ณด๊ธฐ์ํด backend์ ํต์ ํ๋๊ฒ ์๋ alert๋ฅผ ์ถ๋ ฅํ์ฌ์ ํ์ธํจ.



### ๐ ๊ทธ๋ฃนํ

โ ๊ทธ๋ฃนํ๋ **AG Grid Enterprise ์ ์ฉ ๊ธฐ๋ฅ**. ์ฃผ์!

์ฌ์ฉ์๊ฐ ๋ง์ ์์ ๋ฐ์ดํฐ๋ฅผ ์ดํดํ๋๋ฐ ํจ๊ณผ์ ์.

```vue
// fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
fetch('https://www.ag-grid.com/example-assets/row-data.json')
```

๊ธฐ์กด fetch url์ ๋ณ๊ฒฝํ์ฌ ๋ ํฐ ๋ฐ์ดํฐ set์ ์ป์ด์ด.



ag-grid์ ์ํฐํ๋ผ์ด์ฆ ๊ธฐ๋ฅ์ ํ์ฑํ.<br/>์ถ๊ฐ ํจํค์ง ์ค์น

```shell
npm install --save ag-grid-enterprise
```



#### main.js

```javascript
import Vue from 'vue';
import 'ag-grid-enterprise';
import App from './App';
```



์ ํ๋ฆฌ์ผ์ด์์ ๋ค์์์ํ๋ฉด console์ ๋ผ์ด์ผ์ค ํค๊ฐ ์๋ค๋ ๋ฉ์์ง๊ฐ ํ์๋์ด์ผํจ.

์ฌ์ฉ์์ง์  ์ปจํ์คํธ ๋ฉ๋ด์ ๋ ๋ฉ์ง ์ด ๋ฉ๋ด ํ์์ด ์์.

<img src="./readme_images/contextMenu.jpg"/>



๊ทธ๋ฃนํ๋ฅผ ํ์ฑํํด๋ณด์!

#### ์ ์ฒด ์ฝ๋

```vue
<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>
        <ag-grid-vue style="width: 500px; height: 500px;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :autoGroupColumnDef="autoGroupColumnDef"
            rowSelection="multiple"
            @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>
```

```vue
<script>
    import { AgGridVue } from "ag-grid-vue3";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null,
                gridApi: null,
                columnApi: null,
                autoGroupColumnDef: null
            }
        },
        components: {
            AgGridVue
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
            },
            getSelectedRows() {
                const selectedNodes = this.gridApi.getSelectedNodes();
                const selectedData = selectedNodes.map(node => node.data);
                const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
                alert(`Selected nodes: ${selectedDataStringPresentation}`);
            }
        },
        beforeMount() {
            this.columnDefs = [
                { field: 'make', rowGroup: true },
                { field: 'model' },
                { field: 'price' }
            ];

            this.autoGroupColumnDef = {
                headerName: 'Model',
                field: 'model',
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                }
            };

            fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
                .then(result => result.json())
                .then(rowData => this.rowData = rowData);
        }
    }
</script>

<style></style>
```



#### ์ดํด ๋ณด์

```vue
<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>
        <ag-grid-vue style="width: 500px; height: 500px;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :autoGroupColumnDef="autoGroupColumnDef"
            rowSelection="multiple"
            @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>
<script>
...
 beforeMount() {
    this.columnDefs = [
        { field: 'make', rowGroup: true },
        { field: 'model' },
        { field: 'price' }
    ];

    this.autoGroupColumnDef = {
        headerName: 'Model',
        field: 'model',
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true
        }
    };

  ...
}
...
</script>
```

autoGroupColumnDef์์ฑ์ ์ถ๊ฐํ๊ณ , columnDefs์ rowGroup์ update!

grid๋ ์ด์  make๋ก ๊ทธ๋ฃนํํ๊ณ ,  modelํ์ฅ ์ ํ๋ ๊ฐ์ ๋์ดํจ.

groupSelectionChildren ์์ฑ์ ๊ทธ๋ฃน์ ๋ชจ๋  ํญ๋ชฉ์ ์ ํ/์ ํ ํด์ ํ๋ group-level checkbox๋ฅผ ์ถ๊ฐํจ.

autoGroupColumnDef๋ฅผ ์ฌ์ฉํ์ฌ columnDefs์์ checkboxSelection์ ์ญ์ ํจ.



## ๐ ์ฐธ๊ณ 

https://www.ag-grid.com/vue-data-grid/vue3/

https://www.ag-grid.com/vue-data-grid/grid-api/

https://eblo.tistory.com/29

https://dong-queue.tistory.com/57