# 📖 Column API

일부 메소드는 Column객체나 Column ID를 전달할 수 있다.

## 🌏 Column

| 이름         | 설명                 |
| ------------ | -------------------- |
| getColumn    | 지정된 Column을 반환 |
| getAllColumn | 모든 Column 반환     |



## 🌏 Moving

| 이름              | 설명                                                         |
| ----------------- | ------------------------------------------------------------ |
| movingColumn      | Column을 먼저 제거한다음 해당 toIndex위치에 추가함.<br /><br />function moveColumn(    <br />  key: string  \| Column, <br />  toIndex: Number<br />): void; |
| moveColumns       | moveColumn와 동일하지만 목록에서 작동.                       |
| moveColumnByIndex | moveColum과 동일하지만 인덱스위치에서 작동.                  |



## 🌏 Pinning

| 이름                                       | 설명                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| isPinning / isPinningLeft / isPinningRight | 좌우 고정이 되있는지 / 좌로 고정되있는지 / 우로 고정되있는지 |
| setColumnPinned                            | Column 고정/고정해제를 설정.                                 |



## 🌏 Sizing

| 이름                                                  | 설명                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| setColumnWidth / setColumnWidths                      | 단일 Column / 여러 Column의 너비를 설정                      |
| sizeColumnsToFit                                      | 지정된 너비로 열의 크기를 조정하는 그리드를 가져옴.<br />그리드가 너비에 맞게 열을 맞추려면 column API 말고, grid API이용할 것 |
| autoSizeColumn / autoSizeColumns / autoSizeAllColumns | 내용에 따라 열의 크기를 자동으로 조정.<br />/ 열키 목록을 제공 / 표시된 모든 열에 대한 호출 |



## 📘 참고

https://www.ag-grid.com/vue-data-grid/column-api/