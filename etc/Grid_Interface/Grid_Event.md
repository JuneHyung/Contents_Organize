# ๐ Grid Event

๊ทธ๋ฆฌ๋๊ฐ ๋ฐ์์ํค๋ ์ด๋ฒคํธ ๋ชฉ๋ก.

GridOptions์ธํฐํ์ด์ค๋ฅผ ํตํด ์ด๋ฒคํธ์ ๋ํ ์ฝ๋ฐฑ๋ฑ๋ก ๊ฐ๋ฅ.

**์ฝ๋ฐฑ์ด๋ฆ์ ์ด๋ฒคํธ ์ด๋ฆ ์์ on**

cellClicked์ ๊ฒฝ์ฐ gridOptions.onCellClicked

```javascript
 const gridOptions = {
     // Add event handlers
     onCellClicked: (event: CellClickedEvent) => console.log('Cell was clicked'),
 }
```



## ๐ ClipBoard

| ์ด๋ฆ       | ์ค๋ช                  |
| ---------- | --------------------- |
| pasteStart | ๋ถ์ฌ๋ฃ๊ธฐ ์์์ด ์์. |
| pasteEnd   | ๋ถ์ฌ๋ฃ๊ธฐ ์์์ด ์ข๋ฃ  |



## ๐ Column

| ์ด๋ฆ               | ์ค๋ช                                                         |
| ------------------ | ------------------------------------------------------------ |
| columnVisible      | column๋๋ column group์ด ์จ๊ฒจ์ง๊ฑฐ๋ ํ์๋จ.                 |
| columnPinned       | column ๋๋ column group์ด ๊ณ ์  / ๊ณ ์ ํด์  ๋จ                |
| columnResized      | ์ด์ ํฌ๊ธฐ๊ฐ ์กฐ์                                              |
| columnMoved        | ์ด์ด ์ด๋.<br />์ด๋์ด ์๋ฃ๋๋ ์์ ์ ํ์ธํ๋ ค๋ฉด `dragStopped`์๋ ์ด๋ฒคํธ๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค |
| ColumnValueChanged | column ๊ฐ์ด ์ถ๊ฐ ๋๋ ์ ๊ฑฐ๋จ.                                |



## ๐ Integrated Charts

| ์ด๋ฆ                | ์ค๋ช                                     |
| ------------------- | ---------------------------------------- |
| chartCreated        | ์ฐจํธ๊ฐ ์์ฑ๋จ.                           |
| chartOptionsChanged | ์ฌ์ฉ์๊ฐ ์์ ํจ๋์ ํตํด ์์์ ๋ณ๊ฒฝํจ. |



## ๐ Keyboard Navigation

| ์ด๋ฆ                       | ์ค๋ช                                   |
| -------------------------- | -------------------------------------- |
| cellKeyDown / cellKeyPress | keyDown / keyPress์ด๋ฒคํธ๊ฐ ์์์ ๋ฐ์ |



## ๐ Miscellaneous (๊ทธ์ธ ์ฌ๋ฌ๊ฐ์ง)

| ์ด๋ฆ            | ์ค๋ช                                                         |
| --------------- | ------------------------------------------------------------ |
| gridReady       | ๊ทธ๋ฆฌ๋๊ฐ ์ด๊ธฐํ ๋์์ต๋๋ค.<br />๊ทธ๋ฆฌ๋ API๋ฅผ ์ฌ์ฉํด ์ด์ํฌ๊ธฐ๋ฅผ ์์ ํด์ผํ๋ ๊ฒฝ์ฐ ์ด ์ด๋ฒคํธ ์ฌ์ฉ. |
| gridSizeChanged | ๊ทธ๋ฆฌ๋์ ํฌ๊ธฐ๊ฐ ์กฐ์ ๋์์ต๋๋ค.                              |



## ๐ Selection

| ์ด๋ฆ                                                         | ์ค๋ช                                  |
| ------------------------------------------------------------ | ------------------------------------- |
| cellClicked / cellDoubleClicked / cellFocus<br />/ cellMouseOver / cellMouseOut / cellMouseDown /<br />rowClicked, DoubleClicked,Selected | ๊ฐ๊ฐ์ ์๊ณผ row์ ๋ค์ ๋์์ด ์คํ๋จ. |



## ๐ ์ฐธ๊ณ 

https://www.ag-grid.com/vue-data-grid/grid-events/

