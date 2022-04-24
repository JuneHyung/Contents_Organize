# Grid

legends, title, subtitle, x-axis, y-axis가 포함된 plot영역.



## Customizing Grid

`grid.,position`으로 차트영역 위에 눈금선이 보이게 할 수 있다.

```javascript
grid: {
    position: 'front'
}
```



### 줄 표시/숨기기

```javascript
xaxis: {
    lines: {
        show: false,
    }
},
yaxis: {
    lines: {
	    show: false,
    }
}
```



### Styling Grid

그리드의 선 색상 지정, 점선 테두리 설정 가능.

```javascript
grid: {
  borderColor: '#111',
  strokeDashArray: 7,
}
```



### 그리드 행 및 열 채우기

```javascript
grid: {
  row: {
      colors: ['#e5e5e5', 'transparent'],
      opacity: 0.5
  }, 
  column: {
      colors: ['#f8f8f8', 'transparent'],
  }, 
  xaxis: {
    lines: {
      show: true
    }
  }
},
```

