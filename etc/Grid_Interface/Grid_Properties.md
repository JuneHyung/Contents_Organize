# 📖 Grid Properties

https://www.ag-grid.com/vue-data-grid/grid-properties/

모든 Grid Properties들은 GridOptions 인터페이스를 통해 사용 가능.



이번 글은 공식문서를 보고 하나씩 정리해보려다가 종류가 되게 다양하고, 아직 어떤 Options가 자주쓰이고 중요한지 잘 몰라 타 블로그에서 작성된 글을 옮겼습니다.

추후에 사용해보면서 추가할 내용이 있다면 변경될 예정입니다.

또한, 전체를 가져온것이 아니기 때문에 다른 옵션들에 대한 점은 공식문서 참고!

참고 : https://eblo.tistory.com/32?category=713082

## 🌏 Grid Options

| 이름                                                         | 값                 | 설명                                                         |
| ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| columnDefs                                                   | 칼럼 정보          | 정의된 칼럼 정보 넣어주어야함.                               |
| defaultColDef                                                | 기본 정의          | 공통 기본 정의                                               |
| rowData                                                      | [{ key : value}]   | 그리드 데이터, json data를 넣어 주어야함.                    |
| **rowSelection**                                             | single \| multiple | row data를 선택하는 경우 옵션으로 하나만 선택하거나 복수개를 선택 |
| enableColResize -> colResizeDefault                          | true \| false      | 칼럼 resize 허용 여부                                        |
| enableSorting  -> sortable                                   | true \| false      | 정렬 옵션 허용 여부                                          |
| enableFilter -> filter                                       | true \| false      | 필터 옵션 허용 여부                                          |
| enableRangeSelection                                         | true \| false      | ~~정렬 기능 강제여부, true의 경우 정렬이 고정됨~~<br />범위 선택 활성화.<br />기본값 : false |
| suppressRowClickSelection                                    | true \| false      | 선택 허용 여부.<br />행을 클릭할 때 행 선택이 발생하지 않습니다. 체크박스 선택만 원할 때 사용합니다<br />기본값 : false |
| animateRows                                                  | true \| false      | 행 애니메이션의 활성화<br />기본값 : false                   |
| suppressHorizontalScroll                                     | true \| false      | 가로 스크롤 허용 여부, 자동 조정으로 되있다면 불필요<br />alwaysShowHorizontalScroll와 같이 사용하면 안됨.<br />기본값 : false |
| suppressMovableColumns                                       | true \| false      | true인 경우 열 이동을 억제함. => 열을 고정위치로 만듬<br />기본 값 : false |
| localeText                                                   | {"key" : "value"}  | 그리드 내에서 텍스트를 현지화하기 위한 키->값 쌍의 맵입니다.<br />데이터가 없는 경우 보여주는 사용자 메시지<br />{noRowsToShow: '조회 결과가 없습니다.'} |
| getRowStyle -> rowStyle                                      | 스타일 지정        | 모든 행에 적용할 스타일 속성<br />key(style name) value(style value)의 객체로 설정됨.<br />{"textAlign": "center", "backgroundColor":"#f4f4f4"} |
| **onGridReady**<br />여기서 부터 event값인 아이들은 grid Event. | event              | javascript의 onload와 유사.<br />ready이 후 필요한 이벤트를 삽입<br /><br />보통 그리드 자동 사이즈등을 지정<br /><ag-grid-vue<br /><br />@grid-ready="onGridReady"><br />onGridReady:function(event){<br />  event.api.sizeColumnsToFit();<br />} |
| **onGridSizeChanged**                                        | event              | 창 크기가 변경 되었을 때 이벤트<br />onGridSizeChanged: function(event){<br />  event.api.sizeColumnsToFit();<br />} |
| **onCellEditingStarted**                                     | event              | cell편집을 시작할 때 (편집 허용인 컬럼을 더블 클릭할 때) 발생하는 이벤트 |
| **onCellEditingStopped**                                     | event              | cell 편집을 종료할 때 (다른 컬럼으로 이동)발생하는 이벤트<br />데이터 수정 시 값을 재계산 하거나 해당 정보를 별도 관리할 때 이용하는 이벤트로 매우 중요 + 자주 사용 |
| **onCellClicked**                                            | event              | cell을 클릭하는 경우 발생하는 이벤트<br />모달 팝업을 띄우거나 다른 페이지로 이동하거나 클릭시 무언가를 처리해야하는 경우 사용 |
| **onRowClicked**                                             | event              | Row Click하는 경우 발생하는 이벤트, 모달 팝업을 띄우거나 다른페이지로 이동하거나 클릭시 무언가를 처리해야하는 경우 사용 |
| **isRowSelectable**                                          | event              | 특정 Row는 조건에 따라 선택 / 클릭이 안되게 하고 싶은 경우 사용 |
| **onSelectionChanged**                                       | even               | onRowClicked와 유사.<br />Row가 선택이 바뀌는 경우 발생하는 이벤트 |
| **onSortChanged**                                            | event              | 정렬이 변경되었을 때 발생하는 이벤트<br />외부에서 값을 새로 가져오거나 정렬 조건에 따른 로직을 삽입가능 |
| **onCellValueChanged**                                       | event              | cell의 값이 변경되었을 때 발생하는 이벤트.<br />데이터 편집에서 수정이 발생하면 그에 따른 처리를 할 때 이용할 수 있다. |
| **getRowNodeId**                                             | event              | RowNodeId를 가져오는 함수<br />값을 지정해 두면 그리드에서 데이터를 여기서 정의한 값으로 접근가능<br /><br />row nodeId설정<br />getRowNodeId : function(data){<br />  return data.goodCd;<br />}<br /><br />데이터 접근<br />var rowNode = gridOptions.api.getRowNodeId(selectedRow.goodCd); |
| components                                                   | event              | 컴포넌트 정의                                                |
| debug                                                        | true \| false      | 디버그                                                       |
| **setPinnedTopRowData**                                      | data               | 그리드 Top에 데이터 고정시키기                               |
| **setPinnedBottomRowData**                                   | data               | 그리드 Bottom에 데이터 고정시키기                            |



## 🌏 Example

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
    localeText: {noRowsToShow: '조회 결과가 없습니다.'},
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
    // GRID READY 이벤트, 사이즈 자동조정 
    onGridReady: function (event) {
        event.api.sizeColumnsToFit();
    },
    // 창 크기 변경 되었을 때 이벤트 
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
    // 리드 상단 고정 
    setPinnedTopRowData: function(data) {
        return null; 
    },
    // 그리드 하단 고정 
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



## 📘 참고

https://www.ag-grid.com/vue-data-grid/grid-properties/

https://eblo.tistory.com/32?category=713082