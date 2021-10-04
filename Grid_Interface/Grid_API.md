# 📖 Grid API

https://www.ag-grid.com/vue-data-grid/grid-api/

모든 grid method들은 GridOptions의 api속성을 통해 사용이 가능합니다.

## 🌏 Accessories

| 이름               | 설명                                                         |
| ------------------ | ------------------------------------------------------------ |
| hidePopupMenu      | 보이는 context menu나 column메뉴를 숨김                      |
| setSideBar         | 사이드바를 제공된 구성으로 재설정                            |
| getSideBar         | 현재 사이드 바 구성을 반환.                                  |
| setSideBarVisible  | 보이는 패널과 탭 버튼을 포함해 전체 사이드 바를 표시하거나 숨김 |
| isSideBarVisible   | 사이드바가 보이면 true                                       |
| setSideBarPosition | 사이드바의 위치를 설정<br />left \| right 가능               |
| openToolPannel     | 특정 도구 패널을 엽니다.                                     |
| closeToolPannel    | 열려있는 도구 패널을 닫습니다.                               |



## 🌏 ClipBoard

| 이름                         | 설명                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| copySelectedRangeToClipBoard | 선택한 범위를 클립보드에 복사                                |
| copySelectedRowsToClipBoard  | 선택한 행을 클립보드에 복사<br />헤더에 includeHeader = true를 포함하도록 설정 (기본값은 false)<br />원하는 특정 열만 원하는 경우 열목록으로 columnKeys를 설정합니다.<br />function copySelectedRowsToClipboard(    <br />  includeHeader: boolean,    <br />  columnKeys?: (string \| Column) []<br />): void; |



## 🌏 Column Definitions

| 이름             | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| getColumnDefs    | 현재 열 정의를 반환                                          |
| setColumnDefs    | 새 열정의를 설정하기 위해 호출<br />그리드는 모든 column header를 다시 그린 다음 모든 row를 다시 그림 |
| sizeColumnsToFit | 그리드에 수평으로 맞도록 row의 크기를 조정하도록 설정        |



## 🌏 Column Headers

| 이름            | 설명                                                         |
| --------------- | ------------------------------------------------------------ |
| setHeaderHeight | column label header가 포함된 행의 높이를 픽셀단위로 지정.<br />setFloatingFilterHeight, setPivotHeaderHeight 등이 있는데 각각 부동필터가 포함된 행의 높이지정, 피벗 모드에 있을 때 열을 포함하는 행의 높이 지정임. |



## 🌏 Editing

| 이름             | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| startEditingCell | 제공된 셀 편집을 시작.<br />다른 셀이 편집 중이면 해당 셀에서 편집이 중지됨. |
| stopEditing      | 셀이 편집 중이면 편집을 중지함.                              |
| getEditingCells  | 그리드가 편집중인 경우 편집 셀의 세부정보 반환               |



## 🌏 Event

| 이름                | 설명                                          |
| ------------------- | --------------------------------------------- |
| addEventListener    | 지정된 eventType에 대한 이벤트 리스너 등록함. |
| removeEventListener | 이벤트 리스너 제거                            |



## 🌏 Export

| 이름                                                 | 설명                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| exportDataAsCsv / exportDataAsExcel                  | 그리드 데이터의 csv내보내기 / excel내보내기를 다운로드.      |
| getDataAsCsv / getDataAsExcel                        | 각각의 export와 유사하지만, 결과를 다운로드가 아니라 문자열 / Blob을 반환함. |
| exportMultipeSheetsAsExcel / getMultipeSheetsAsExcel | 하나의 파일에 여러 시트의 Excel내보내기를 다운 / 사용자가 처리할 Blob을 반환 |



## 🌏 Filtering

| 이름                                  | 설명                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| setQuickFilter                        | 필터링을 위해 빠른 필터 텍스트를 그리드에 전달               |
| resetQuickFilter                      | 모든 rowNode에서 빠른 필터 캐시 텍스트를 재설정              |
| is(Quick / Column / Any)FilterPresent | quick / Column / 어떤(quick, advanced, external)필터가 설정되있으면 true반환. |



## 🌏 Chart

| 이름                           | 설명                                               |
| ------------------------------ | -------------------------------------------------- |
| createRangeChartsetQuickFilter | 범위에서 프로그래밍 방식으로 차트를 만드는 데 사용 |



## 🌏 Refresh

| 이름          | 설명                                                |
| ------------- | --------------------------------------------------- |
| refereshCells | 모든 셀에서 변경을 감지해 필요한 경우 셀을 새로고침 |
| redrawRows    | DOM에서 행을 제거하고 처음부터 다시 생성            |



## 🌏 Row Nodes

| 이름       | 설명                                                         |
| ---------- | ------------------------------------------------------------ |
| getRowNode | 주어진 ID를 가진 행 노드를 반환.<br /><br />function getRowNode(id: string): [RowNode](https://www.ag-grid.com/vue-data-grid/row-object/) \| undefined |



## 🌏 Select

| 이름                                    | 설명                                                 |
| --------------------------------------- | ---------------------------------------------------- |
| selectAll / deselectAll                 | 필터링 관계 없이 모든 행을 선택 / 모든행 선택을 지움 |
| selectAllFiltered / deselectAllFiltered | 필터링된 모든 행을 선택 / 모든 선택을 지움.          |
| getSelectedNodes                        | 선택된 노드 목록을 반환.                             |
| getSelectedRows                         | 선택한 행의 목록을 반환                              |



## 📘 참고

https://www.ag-grid.com/vue-data-grid/grid-api/

https://eblo.tistory.com/32?category=713082