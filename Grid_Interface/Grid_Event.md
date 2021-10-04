# 📖 Grid Event

그리드가 발생시키는 이벤트 목록.

GridOptions인터페이스를 통해 이벤트에 대한 콜백등록 가능.

**콜백이름은 이벤트 이름 앞에 on**

cellClicked의 경우 gridOptions.onCellClicked

```javascript
 const gridOptions = {
     // Add event handlers
     onCellClicked: (event: CellClickedEvent) => console.log('Cell was clicked'),
 }
```



## 🌏 ClipBoard

| 이름       | 설명                  |
| ---------- | --------------------- |
| pasteStart | 붙여넣기 작업이 시작. |
| pasteEnd   | 붙여넣기 작업이 종료  |



## 🌏 Column

| 이름               | 설명                                                         |
| ------------------ | ------------------------------------------------------------ |
| columnVisible      | column또는 column group이 숨겨지거나 표시됨.                 |
| columnPinned       | column 또는 column group이 고정 / 고정해제 됨                |
| columnResized      | 열의 크기가 조정                                             |
| columnMoved        | 열이 이동.<br />이동이 완료되는 시점을 확인하려면 `dragStopped`아래 이벤트를 사용할 수 있습니다 |
| ColumnValueChanged | column 값이 추가 또는 제거됨.                                |



## 🌏 Integrated Charts

| 이름                | 설명                                     |
| ------------------- | ---------------------------------------- |
| chartCreated        | 차트가 생성됨.                           |
| chartOptionsChanged | 사용자가 서식 패널을 통해 서식을 변경함. |



## 🌏 Keyboard Navigation

| 이름                       | 설명                                   |
| -------------------------- | -------------------------------------- |
| cellKeyDown / cellKeyPress | keyDown / keyPress이벤트가 셀에서 발생 |



## 🌏 Miscellaneous (그외 여러가지)

| 이름            | 설명                                                         |
| --------------- | ------------------------------------------------------------ |
| gridReady       | 그리드가 초기화 되었습니다.<br />그리드 API를 사용해 열의크기를 수정해야하는 경우 이 이벤트 사용. |
| gridSizeChanged | 그리드의 크기가 조정되었습니다.                              |



## 🌏 Selection

| 이름                                                         | 설명                                  |
| ------------------------------------------------------------ | ------------------------------------- |
| cellClicked / cellDoubleClicked / cellFocus<br />/ cellMouseOver / cellMouseOut / cellMouseDown /<br />rowClicked, DoubleClicked,Selected | 각각의 셀과 row에 뒤의 동작이 실행됨. |



## 📘 참고

https://www.ag-grid.com/vue-data-grid/grid-events/

