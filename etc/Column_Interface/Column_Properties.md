# 📖 Column Properties

column `ColDef` 및 column group `ColGroupDef`에 대한 properties들을 사용할 수있다.

## 🌏 Column

| 이름              | 설명                                                         |
| ----------------- | ------------------------------------------------------------ |
| field             | cell data를 가져올 행의 필드                                 |
| colId             | column에 부여할 고유 ID (선택사항)<br />누락된 경우 field로 설정됨. |
| type              | column의 템플릿으로 사용할 수 있는 쉼표로 구분된 문자열 또는 columnType키가 포함된 문자열 배열. |
| checkboxSelection | boolean or checkboxSelection 콜백.<br />열에서 선택확인란을  렌더링하려면 true로 설정.<br />기본 : false |
| suppress ~~       | true로 설정되면 suppress 뒤의 동작을 억제함.<br />ex) suppressKeyboardEvent : 그리드 셀에서 특정 키보드 이벤트를 억제. |



## 🌏 Column : Display

| 이름            | 설명                                                   |
| --------------- | ------------------------------------------------------ |
| editable        | true면 이열을 편집할 수 있게 설정.<br />기본값 : false |
| cellEditor      | 이 column(해당 column)에 사용될 cellEditor             |
| cellEditorPopup | true설정 시 셀 편집기가 팝업으로 표시됨.               |



## 🌏 Column : Events

| 이름                                | 설명                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| onCellValueChanged                  | 편집 또는 응용 프로그램 호출로 인해 셀 값이 변경된 후 의 콜백 |
| onCellClicked / onCellDoubleClicked | cell을 클릭 / 더블클릭시 호출되는 콜백                       |
| onCellContextMenu                   | 셀을 마우스 오른쪽 버튼으로 클릭하면 콜백이 호출됨.          |



## 🌏 Column : Filter

| 이름   | 설명                           |
| ------ | ------------------------------ |
| Filter | 이 열에 사용될 필터 구성 요소. |



## 🌏 Column : Header

| 이름         | 설명                                                         |
| ------------ | ------------------------------------------------------------ |
| headerName   | Column Header에 보여줄 Title 이름.                           |
| suppressMenu | true면 header에 대해 메뉴가 표시되지 않아야 하는 경우로 설정.<br />header에 메뉴 노출 여부, true인 경우 칼럼 메뉴가 사라진다. |



## 🌏 Column : pinned

| 이름   | 설명                                      |
| ------ | ----------------------------------------- |
| pinned | 열을 한쪽에 고정<br />right \| left<br /> |



## 🌏 Column : Rendering & Styling

| 이름       | 설명                                           |
| ---------- | ---------------------------------------------- |
| cellStyle  | 특정 셀에대한 css값의 object를 반환하는 함수   |
| cellClass  | 셀에 사용할 클래스                             |
| autoHeight | 그리드가 열의 내용을 기반으로 행의 높이를 계산 |



## 🌏 Column : Sort

| 이름     | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| sortable | 해당 column에 대해 정렬 할 수 있는지에 대해<br />default : false |
| sort     | 정렬에 대한 설정<br />asc \| desc                            |



## 🌏 Column : Width

| 이름                | 설명                                                         |
| ------------------- | ------------------------------------------------------------ |
| width               | 셀의 초기 너비                                               |
| minWidth / maxWidth | 최소 / 최대 너비                                             |
| resizable           | true면 열의 크기를 조정할 수 있다.                           |
| suppressSizeToFit   | 작업중에 크기에 맞게 column의 너비를 고정하려면 true로 설정  |
| suppressAutoSize    | true면 열의 가장자리를 두번 클릭하여 이 열의 크기를 자동으로 조정하게 설정. |



## 📘 참고

https://www.ag-grid.com/vue-data-grid/column-properties/

