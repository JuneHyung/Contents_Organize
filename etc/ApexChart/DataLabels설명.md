# DataLabels

## DataLabels

[DataLabels](https://apexcharts.com/docs/datalabels/)

series에 전달되는 실제값.

표시 전 값을 수정할 수 있는 formatter 추가 가능.



## DataLabels 위치 변경

❗ columns/bar charts는 추가적으로 dataLabels에 `plotOptions.bar.dataLabels`가 제공된다.

`plotOptions.bar.dataLabels.position`를 이용하여 위치 top이나 bottom이동가능

```javascript
plotOptions: {
  bar: {
    dataLabels: {
      position: 'top' // 'top' || 'bottom'
    }
  }
},
```



## DataLabels offset

기본적으로 dataLabels는 column / bar 안에 있다.

offsetX/offsetY를 이용해 밖으로 꺼낼 수 있다.

```javascript
plotOptions: {
  bar: {
    dataLabels: {
      position: 'top'
    }
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#333']
    },
    offsetX: 30
  },
},
```



## Custom Datalabels

formatter를 이용하여 결과 label을 custom 할 수 있다.

```javascript
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  formatter: function(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
  },
  offsetX: 0,
},
```



## Drop Shadow

dropShadow속성을 통해 dataLabel들의 그림자 추가가능.

```javascript
dataLabels: {
  enabled: true,
  dropShadow: {
      enabled: true,
      left: 2,
      top: 2,
      opacity: 0.5
  }
}
```

