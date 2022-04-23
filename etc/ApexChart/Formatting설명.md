# Formatting

## Formatting Axes labels

축의 text를 formatting하는 경우

`yaxis.labels.formatter`와 `xaxis.labels.formatter`로 control 가능.

```javascript
yaxis: {
  labels: {
    formatter: function (value) {
      return value + "$";
    }
  },
},
xaxis: {
  labels: {
    formatter: function (value) {
      return value;
    }
  }
}
```

[yaxis.labels.formatter](https://apexcharts.com/docs/options/yaxis/#formatter)

[xaxis.labels.formatter](https://apexcharts.com/docs/options/xaxis/#formatter)



## DateTime

### xaxis.labels.datetimeFormatter

x축 레이블 생성을 위한 default세팅

```javascript
xaxis: {
    labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    }
  }
```



### xaxis.labels.format

날짜/시간 값에 대한 X 값 형식은 다음과 같이 지정할 수 있다.

`xaxis.labels.format ='dd/MM'`

시간의 차이가 년/월/일/시간인지 여부를 고려하지 않음.



### xaxis.labels.formatter

모든 것을 재정의하고 x축 값에 대한 사용자 정의 함수를 적용

```javascript
xaxis: {
  labels: {
    formatter: function (value, timestamp) {
      return new Date(timestamp) // The formatter function overrides format property
    }, 
  }
}
```



> dddd, ddd, dd, d, MMMM, MMM, MM, M, yyyy, ....
>
> 등등 유효한 옵션이 공식문서에 정의되있으니 사용시 참고.

[available options](https://apexcharts.com/docs/datetime/)