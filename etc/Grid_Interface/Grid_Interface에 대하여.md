# ๐ Grid Interface

 ๋ฉ์๋, ์์ฑ ๋ฐ ์ด๋ฒคํธ๋ฅผ ํฌํจํ์ฌ **์ ํ๋ฆฌ์ผ์ด์์ด ๊ทธ๋ฆฌ๋์ ์ํธ ์์ฉํ๋ ๋ฐ ์ฌ์ฉํ  ์ ์๋ ๊ณต์ฉ ์ธํฐํ์ด์ค**์ ๋ํด ์ค๋ช

* Grid Properties : ๊ทธ๋ฆฌ๋๋ฅผ ๊ตฌ์ฑํ๋๋ฐ ์ฌ์ฉ๋๋ ์์ฑ
* Grid API : ๊ทธ๋ฆฌ๋๊ฐ ์์ฑ๋ ํ ๊ทธ๋ฆฌ๋์ ์ํธ ์์ฉํ๋๋ฐ ์ฌ์ฉ๋๋ ๋ฉ์๋
* Grid Events : ์ ํ๋ฆฌ์ผ์ด์์ ์ํ ๋ณ๊ฒฝ ์ฌํญ์ ์๋ฆฌ๊ธฐ ์ํด ๊ทธ๋ฆฌ๋์์ ๊ฒ์ํ ์ด๋ฒคํธ
* Grid Callbacks : ๊ทธ๋ฆฌ๋์์ ์ ํ๋ฆฌ์ผ์ด์์์ ํ์ํ ์ ๋ณด๋ฅผ ๊ฒ์ํ๋๋ฐ ์ฌ์ฉ๋จ
* Row node : ๊ทธ๋ฆฌ๋์ ๊ฐ ํ์ Row Ndoe๊ฐ์ฒด๋ก ํํ๋๋ฉฐ,  , Row Node ๊ฐ์ฒด๋ ์ ํ๋ฆฌ์ผ์ด์์์ ์ ๊ณตํ๋ ํ ๋ฐ์ดํฐ์ ๋ํ ์ฐธ์กฐ๋ฅผ ๊ฐ์ต๋๋ค. <br/>ํ ๋ธ๋๋ ํ ๋ฐ์ดํฐ ํญ๋ชฉ์ ๋ํํฉ๋๋ค.<br/>ํน์  ํ๊ณผ ์ํธ์์ฉ ํ๊ธฐ ์ํ ์์ฑ, ๋ฉ์๋ ๋ฐ ์ด๋ฒคํธ๊ฐ ์์.

์ผ๋จ์ Properties, API, Events์ ๋ํด์๋ง ์์๋ณผ ์์ .

๋๋จธ์ง๋ ๊ณต์๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ์.<br/>https://www.ag-grid.com/vue-data-grid/grid-interface/



## ๐ Properties, Events, Callbacks and APIs

**Attributes** : attributes๋ properties์ง๋ง, ๋ฐ์ธ๋ฉ๋์ง ์์. ๋์  ๋ฆฌํฐ๋ด ๊ฐ์ด ์ ๊ณต๋จ.<br/>ex) rowSelection="multiple"

**Properties** : properties๋ ๋ฐ์ธ๋ฉ ๋๋ ์์ฑ. <br/>ex) :columnDefs = "columnDefs"

**Callback** :  ๋ฐ์ธ๋ฉ์ด ๊ฐ๋ฅ.<br/>ex) isScrollLag = "myIsScrollLagFunction"

**Event Handler** : ํ์ค Angular ๋ฐฉ์์ผ๋ก ๋ฐ์ธ๋ฉ๋จ. ์ด๋ ์ด๋ฒคํธ ์ด๋ฆ์ kabab-case๋ฅผ ์ฌ์ฉ.<br/>ex) @cell-clicked="onCellClicked"

**API** : ๊ทธ๋ฆฌ๋ API์ ์ปฌ๋ผAPI๋ ์ปดํฌ๋ํธ๋ฅผ ํตํด ์ ๊ทผ ๊ฐ๋ฅ.



## ๐ Grid & Column API์ ์ ๊ทผ

**๊ทธ๋ฆฌ๋๊ฐ ์ด๊ธฐํ๋๋ฉด gridReady์ด๋ฒคํธ๊ฐ ๋ฐ์**ํจ.

๊ทธ๋ฆฌ๋ API๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด ๊ทธ๋ฆฌ๋์ onGridReady(params)์ฝ๋ฐฑ์ ๋ฃ๊ณ , params์์ API๋ฅผ ๊ฐ์ ธ์์ผํจ.<br/>๊ทธ ํ ๋์ค์ API๋ฅผ ํธ์ถํ์ฌ ๊ทธ๋ฆฌ๋์ ์ํธ์์ฉ. (์์ฑ์ ์ค์ ํ๊ณ  ๋ณ๊ฒฝํ์ฌ ์ํํ  ์ ์๋ ์ํธ ์์ฉ ์ธ์๋)

๋ฌด์จ ์๋ฆฌ์ธ์ง ์๋ ์ฝ๋๋ฅผ ๋ณด์.

```vue
<ag-grid-vue
...
    @grid-ready="onGridReady"
...
/>
<script>
onGridReady = (params) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
}
</script>
```

์ด์ฒ๋ผ ag-grid-vue์์ ์ฝ๋ฐฑ์ ๋ฃ๊ณ , params์์ API๋ฅผ ๊ฐ์ ธ์ ๊ทธ๋ค์ API๋ฅผ ํธ์ถํ์ฌ ์ฌ์ฉํ๋ค.



## ๐ Grid Options

๊ทธ๋ฆฌ๋ ์ต์์ ์ผ๋ฐ ํ๋ ์์ํฌ ๋ฐ์ธ๋ฉ ๋์  ๋๋ ์ถ๊ฐ๋ก ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```vue
<ag-grid-vue
    :gridOptions="gridOptions"
	...
/>
...
const gridOptions = {
    // PROPERTIES
    // Objects like myRowData and myColDefs would be created in your application
    rowData: myRowData,
    columnDefs: myColDefs,
    pagination: true,
    rowSelection: 'single',

    // EVENTS
    // Add event handlers
    onRowClicked: event => console.log('A row was clicked')
    onColumnResized: event => console.log('A column was resized')
    onGridReady: event => console.log('The grid is now ready')

    // CALLBACKS
    isScrollLag: () => false
}
```

๊ทธ๋ฆฌ๋๊ฐ ์ด๊ธฐํ ๋๋ฉด ๊ทธ๋ฆฌ๋API๋ฐ columnAPI์ ์์ธ์ค๊ฐ ๊ฐ๋ฅ.

```javascript
// refresh the grid
this.gridOptions.api.refreshView();

// resize columns in the grid to fit the available space
this.gridOptions.columnApi.sizeColumnsToFit();
```



## ๐ Events๋ ๋น๋๊ธฐ์

๊ทธ๋ฆฌ๋ ์ด๋ฒคํธ๋ ๋น๋๊ธฐ์์ด๋ฏ๋ก ์ด๋ฒคํธ ์ฝ๋ฐฑ์ด ํธ์ถ๋  ๋ ๊ทธ๋ฆฌ๋ ์ํ๊ฐ ๊ฒฐ์ ๋จ.



## ๐ Default Boolean Properties

์์ฑ์ด boolean์ธ ๊ฒฝ์ฐ false๊ฐ ๊ธฐ๋ณธ๊ฐ์๋๋ค. ( ๋๋ ๊ณต๋ฐฑ์ผ๋ก ๋จ๊ฒจ๋ก๋๋ค.)



## ๐ ์ฐธ๊ณ 

https://www.ag-grid.com/vue-data-grid/grid-interface/



