# ๐ Grid Properties

https://www.ag-grid.com/vue-data-grid/grid-properties/

๋ชจ๋  Grid Properties๋ค์ GridOptions ์ธํฐํ์ด์ค๋ฅผ ํตํด ์ฌ์ฉ ๊ฐ๋ฅ.



์ด๋ฒ ๊ธ์ ๊ณต์๋ฌธ์๋ฅผ ๋ณด๊ณ  ํ๋์ฉ ์ ๋ฆฌํด๋ณด๋ ค๋ค๊ฐ ์ข๋ฅ๊ฐ ๋๊ฒ ๋ค์ํ๊ณ , ์์ง ์ด๋ค Options๊ฐ ์์ฃผ์ฐ์ด๊ณ  ์ค์ํ์ง ์ ๋ชฐ๋ผ ํ ๋ธ๋ก๊ทธ์์ ์์ฑ๋ ๊ธ์ ์ฎ๊ฒผ์ต๋๋ค.

์ถํ์ ์ฌ์ฉํด๋ณด๋ฉด์ ์ถ๊ฐํ  ๋ด์ฉ์ด ์๋ค๋ฉด ๋ณ๊ฒฝ๋  ์์ ์๋๋ค.

๋ํ, ์ ์ฒด๋ฅผ ๊ฐ์ ธ์จ๊ฒ์ด ์๋๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ์ต์๋ค์ ๋ํ ์ ์ ๊ณต์๋ฌธ์ ์ฐธ๊ณ !

์ฐธ๊ณ  : https://eblo.tistory.com/32?category=713082

## ๐ Grid Options

| ์ด๋ฆ                                                         | ๊ฐ                 | ์ค๋ช                                                         |
| ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| columnDefs                                                   | ์นผ๋ผ ์ ๋ณด          | ์ ์๋ ์นผ๋ผ ์ ๋ณด ๋ฃ์ด์ฃผ์ด์ผํจ.                               |
| defaultColDef                                                | ๊ธฐ๋ณธ ์ ์          | ๊ณตํต ๊ธฐ๋ณธ ์ ์                                               |
| rowData                                                      | [{ key : value}]   | ๊ทธ๋ฆฌ๋ ๋ฐ์ดํฐ, json data๋ฅผ ๋ฃ์ด ์ฃผ์ด์ผํจ.                    |
| **rowSelection**                                             | single \| multiple | row data๋ฅผ ์ ํํ๋ ๊ฒฝ์ฐ ์ต์์ผ๋ก ํ๋๋ง ์ ํํ๊ฑฐ๋ ๋ณต์๊ฐ๋ฅผ ์ ํ |
| enableColResize -> colResizeDefault                          | true \| false      | ์นผ๋ผ resize ํ์ฉ ์ฌ๋ถ                                        |
| enableSorting  -> sortable                                   | true \| false      | ์ ๋ ฌ ์ต์ ํ์ฉ ์ฌ๋ถ                                          |
| enableFilter -> filter                                       | true \| false      | ํํฐ ์ต์ ํ์ฉ ์ฌ๋ถ                                          |
| enableRangeSelection                                         | true \| false      | ~~์ ๋ ฌ ๊ธฐ๋ฅ ๊ฐ์ ์ฌ๋ถ, true์ ๊ฒฝ์ฐ ์ ๋ ฌ์ด ๊ณ ์ ๋จ~~<br />๋ฒ์ ์ ํ ํ์ฑํ.<br />๊ธฐ๋ณธ๊ฐ : false |
| suppressRowClickSelection                                    | true \| false      | ์ ํ ํ์ฉ ์ฌ๋ถ.<br />ํ์ ํด๋ฆญํ  ๋ ํ ์ ํ์ด ๋ฐ์ํ์ง ์์ต๋๋ค. ์ฒดํฌ๋ฐ์ค ์ ํ๋ง ์ํ  ๋ ์ฌ์ฉํฉ๋๋ค<br />๊ธฐ๋ณธ๊ฐ : false |
| animateRows                                                  | true \| false      | ํ ์ ๋๋ฉ์ด์์ ํ์ฑํ<br />๊ธฐ๋ณธ๊ฐ : false                   |
| suppressHorizontalScroll                                     | true \| false      | ๊ฐ๋ก ์คํฌ๋กค ํ์ฉ ์ฌ๋ถ, ์๋ ์กฐ์ ์ผ๋ก ๋์๋ค๋ฉด ๋ถํ์<br />alwaysShowHorizontalScroll์ ๊ฐ์ด ์ฌ์ฉํ๋ฉด ์๋จ.<br />๊ธฐ๋ณธ๊ฐ : false |
| suppressMovableColumns                                       | true \| false      | true์ธ ๊ฒฝ์ฐ ์ด ์ด๋์ ์ต์ ํจ. => ์ด์ ๊ณ ์ ์์น๋ก ๋ง๋ฌ<br />๊ธฐ๋ณธ ๊ฐ : false |
| localeText                                                   | {"key" : "value"}  | ๊ทธ๋ฆฌ๋ ๋ด์์ ํ์คํธ๋ฅผ ํ์งํํ๊ธฐ ์ํ ํค->๊ฐ ์์ ๋งต์๋๋ค.<br />๋ฐ์ดํฐ๊ฐ ์๋ ๊ฒฝ์ฐ ๋ณด์ฌ์ฃผ๋ ์ฌ์ฉ์ ๋ฉ์์ง<br />{noRowsToShow: '์กฐํ ๊ฒฐ๊ณผ๊ฐ ์์ต๋๋ค.'} |
| getRowStyle -> rowStyle                                      | ์คํ์ผ ์ง์         | ๋ชจ๋  ํ์ ์ ์ฉํ  ์คํ์ผ ์์ฑ<br />key(style name) value(style value)์ ๊ฐ์ฒด๋ก ์ค์ ๋จ.<br />{"textAlign": "center", "backgroundColor":"#f4f4f4"} |
| **onGridReady**<br />์ฌ๊ธฐ์ ๋ถํฐ event๊ฐ์ธ ์์ด๋ค์ grid Event. | event              | javascript์ onload์ ์ ์ฌ.<br />ready์ด ํ ํ์ํ ์ด๋ฒคํธ๋ฅผ ์ฝ์<br /><br />๋ณดํต ๊ทธ๋ฆฌ๋ ์๋ ์ฌ์ด์ฆ๋ฑ์ ์ง์ <br /><ag-grid-vue<br /><br />@grid-ready="onGridReady"><br />onGridReady:function(event){<br />  event.api.sizeColumnsToFit();<br />} |
| **onGridSizeChanged**                                        | event              | ์ฐฝ ํฌ๊ธฐ๊ฐ ๋ณ๊ฒฝ ๋์์ ๋ ์ด๋ฒคํธ<br />onGridSizeChanged: function(event){<br />  event.api.sizeColumnsToFit();<br />} |
| **onCellEditingStarted**                                     | event              | cellํธ์ง์ ์์ํ  ๋ (ํธ์ง ํ์ฉ์ธ ์ปฌ๋ผ์ ๋๋ธ ํด๋ฆญํ  ๋) ๋ฐ์ํ๋ ์ด๋ฒคํธ |
| **onCellEditingStopped**                                     | event              | cell ํธ์ง์ ์ข๋ฃํ  ๋ (๋ค๋ฅธ ์ปฌ๋ผ์ผ๋ก ์ด๋)๋ฐ์ํ๋ ์ด๋ฒคํธ<br />๋ฐ์ดํฐ ์์  ์ ๊ฐ์ ์ฌ๊ณ์ฐ ํ๊ฑฐ๋ ํด๋น ์ ๋ณด๋ฅผ ๋ณ๋ ๊ด๋ฆฌํ  ๋ ์ด์ฉํ๋ ์ด๋ฒคํธ๋ก ๋งค์ฐ ์ค์ + ์์ฃผ ์ฌ์ฉ |
| **onCellClicked**                                            | event              | cell์ ํด๋ฆญํ๋ ๊ฒฝ์ฐ ๋ฐ์ํ๋ ์ด๋ฒคํธ<br />๋ชจ๋ฌ ํ์์ ๋์ฐ๊ฑฐ๋ ๋ค๋ฅธ ํ์ด์ง๋ก ์ด๋ํ๊ฑฐ๋ ํด๋ฆญ์ ๋ฌด์ธ๊ฐ๋ฅผ ์ฒ๋ฆฌํด์ผํ๋ ๊ฒฝ์ฐ ์ฌ์ฉ |
| **onRowClicked**                                             | event              | Row Clickํ๋ ๊ฒฝ์ฐ ๋ฐ์ํ๋ ์ด๋ฒคํธ, ๋ชจ๋ฌ ํ์์ ๋์ฐ๊ฑฐ๋ ๋ค๋ฅธํ์ด์ง๋ก ์ด๋ํ๊ฑฐ๋ ํด๋ฆญ์ ๋ฌด์ธ๊ฐ๋ฅผ ์ฒ๋ฆฌํด์ผํ๋ ๊ฒฝ์ฐ ์ฌ์ฉ |
| **isRowSelectable**                                          | event              | ํน์  Row๋ ์กฐ๊ฑด์ ๋ฐ๋ผ ์ ํ / ํด๋ฆญ์ด ์๋๊ฒ ํ๊ณ  ์ถ์ ๊ฒฝ์ฐ ์ฌ์ฉ |
| **onSelectionChanged**                                       | even               | onRowClicked์ ์ ์ฌ.<br />Row๊ฐ ์ ํ์ด ๋ฐ๋๋ ๊ฒฝ์ฐ ๋ฐ์ํ๋ ์ด๋ฒคํธ |
| **onSortChanged**                                            | event              | ์ ๋ ฌ์ด ๋ณ๊ฒฝ๋์์ ๋ ๋ฐ์ํ๋ ์ด๋ฒคํธ<br />์ธ๋ถ์์ ๊ฐ์ ์๋ก ๊ฐ์ ธ์ค๊ฑฐ๋ ์ ๋ ฌ ์กฐ๊ฑด์ ๋ฐ๋ฅธ ๋ก์ง์ ์ฝ์๊ฐ๋ฅ |
| **onCellValueChanged**                                       | event              | cell์ ๊ฐ์ด ๋ณ๊ฒฝ๋์์ ๋ ๋ฐ์ํ๋ ์ด๋ฒคํธ.<br />๋ฐ์ดํฐ ํธ์ง์์ ์์ ์ด ๋ฐ์ํ๋ฉด ๊ทธ์ ๋ฐ๋ฅธ ์ฒ๋ฆฌ๋ฅผ ํ  ๋ ์ด์ฉํ  ์ ์๋ค. |
| **getRowNodeId**                                             | event              | RowNodeId๋ฅผ ๊ฐ์ ธ์ค๋ ํจ์<br />๊ฐ์ ์ง์ ํด ๋๋ฉด ๊ทธ๋ฆฌ๋์์ ๋ฐ์ดํฐ๋ฅผ ์ฌ๊ธฐ์ ์ ์ํ ๊ฐ์ผ๋ก ์ ๊ทผ๊ฐ๋ฅ<br /><br />row nodeId์ค์ <br />getRowNodeId : function(data){<br />  return data.goodCd;<br />}<br /><br />๋ฐ์ดํฐ ์ ๊ทผ<br />var rowNode = gridOptions.api.getRowNodeId(selectedRow.goodCd); |
| components                                                   | event              | ์ปดํฌ๋ํธ ์ ์                                                |
| debug                                                        | true \| false      | ๋๋ฒ๊ทธ                                                       |
| **setPinnedTopRowData**                                      | data               | ๊ทธ๋ฆฌ๋ Top์ ๋ฐ์ดํฐ ๊ณ ์ ์ํค๊ธฐ                               |
| **setPinnedBottomRowData**                                   | data               | ๊ทธ๋ฆฌ๋ Bottom์ ๋ฐ์ดํฐ ๊ณ ์ ์ํค๊ธฐ                            |



## ๐ Example

```javascript
var gridOptions = {
    columnDefs: columnDefs,
    rowData: students,
    defaultColDef: {
        editable: true,
        width: 100
    },
    rowSelection: 'single', /* 'single' or 'multiple',*/
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    enableRangeSelection: true,
    suppressRowClickSelection: false,
    animateRows: true,
    suppressHorizontalScroll: true,
    localeText: {noRowsToShow: '์กฐํ ๊ฒฐ๊ณผ๊ฐ ์์ต๋๋ค.'},
    getRowStyle: function (param) {
        if (param.node.rowPinned) {
            return {'font-weight': 'bold', background: '#dddddd'};
        }
        return {'text-align': 'center'};
    },
    getRowHeight: function(param) {
        if (param.node.rowPinned) {
            return 30;
        }
        return 24;
    },
    // GRID READY ์ด๋ฒคํธ, ์ฌ์ด์ฆ ์๋์กฐ์  
    onGridReady: function (event) {
        event.api.sizeColumnsToFit();
    },
    // ์ฐฝ ํฌ๊ธฐ ๋ณ๊ฒฝ ๋์์ ๋ ์ด๋ฒคํธ 
    onGridSizeChanged: function(event) {
        event.api.sizeColumnsToFit();
    },
    onRowEditingStarted: function (event) {
        console.log('never called - not doing row editing');
    },
    onRowEditingStopped: function (event) {
        console.log('never called - not doing row editing');
    },
    onCellEditingStarted: function (event) {
        console.log('cellEditingStarted');
    },
    onCellEditingStopped: function (event) {
        console.log('cellEditingStopped');
    },    
    onRowClicked : function (event){
        console.log('onRowClicked');
    },
    onCellClicked : function (event){
        console.log('onCellClicked');
    },
    isRowSelectable : function(event){
        console.log('isRowSelectable');
        return true;
    },
    onSelectionChanged : function (event) {
        console.log('onSelectionChanged');
    },
    onSortChanged: function (event) {
        console.log('onSortChanged');
    },
    onCellValueChanged: function (event) {
        console.log('onCellValueChanged');
    },
    getRowNodeId : function(data) {
        return null; 
    },
    // ๋ฆฌ๋ ์๋จ ๊ณ ์  
    setPinnedTopRowData: function(data) {
        return null; 
    },
    // ๊ทธ๋ฆฌ๋ ํ๋จ ๊ณ ์  
    setPinnedBottomRowData: function(data) {
        return null; 
    },
    components:{
        numericCellEditor: NumericCellEditor,
        moodEditor: MoodEditor
    },
    debug: false
};
```



## ๐ ์ฐธ๊ณ 

https://www.ag-grid.com/vue-data-grid/grid-properties/

https://eblo.tistory.com/32?category=713082