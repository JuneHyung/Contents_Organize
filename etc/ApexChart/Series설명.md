# Series [Working with Data]

## Series

series는 **data set**이다.

single또는 multiple data series를 가질 수 있다.

data format을 지켜주어야함!



## Single Values

```javascript
series:[{
  data: [23, 34, 12, 54, 32, ... , 43]
}]
```

모든 value들은 y axes의 값들을 나타낸다.

이 형식의 format은 default로 category chart로 간주되며, `xaxis.categories`가 제공되어야한다.

```javascript
xaxis:{
  categories: ["Jan", "Feb", "Mar", ... , "Dec"]
}
```

> ❗ "Single Values"형식은 세로막대형 이나 막대형 차트같은 category chart에서 사용하기 좋음.



## Paired Values

### 1) 2차원 배열에서 Numeric Paired Values

```javascript
series: [{
  data: [[1, 34], [3, 54], [5, 23] , ... , [15, 43]]
}], 
xaxis: {
  type: 'numeric'
}
```

배열의 첫 번째는 x axes, 두 번째는 y axes 값을 나타냄.

소수점을 사용해 x axes 중간에 값 표시가 가능하다.



### 2) XY속성을 사용한 Numeric Paired Values

```javascript
series: [{
    data: [{
        x: 20,
        y: 54
    }, {
        x: 30,
        y: 66
    }],
}],
xaxis: {
  type: 'numeric'
}
```

이처럼 XY값을 객체로 전달하는 방법도 있다.

`xaxis.type: 'numeric'`을 잊으면 안된다.



### 3) Categories paired values

별도의 `xaxis.categories`배열을 제공하는 대신 y값과 함께 범주(x값)을 제공할 수 있다.

```javascript
series: [{
    data: [{
        x: 'Apple',
        y: 54
    }, {
        x: 'Orange',
        y: 66
    }],
}],
xaxis: {
  type: 'category'
}
```

> ❗ Treemap같은 **특정 차트유형은 이 형식만 허용**함. 
>
> 다른 위치에서 사용될 수 있는 데이터 포인트와 함께 추가 정보를 추가하는데도 유용.
>
> ex) tooltip, datalabels, ...



## Timeline Series

타임라인 시리즈를 플롯하려면 다음 방식으로 **타임스탬프 값을 제공해야함.**

### 1) TimeStamp

```javascript
series: [{
  data: [[1324508400000, 34], [1324594800000, 54] , ... , [1326236400000, 43]]
}]
```



### 2)  Data String

```javascript
series: [{
  data: [{ x: '05/06/2014', y: 54 }, { x: '05/08/2014', y: 17 } , ... , { x: '05/28/2014', y: 26 }]
}]
```

제공한 DateTime 문자열은 JavaScript의 Date.parse() 함수를 통해 구문 분석할 때 true를 반환해야 합니다.

> Date.parse()가 날짜의 문자열 표현을 구문 분석하고, 잘못된 날짜값의 경우 NaN을 반환함.
> Date.parse()를 했을 때 형식에 맞아야 된다는거 같음. <br/>
> 예제의 경우
>
>  data: [
>         {
>           x: "02-10-2017 GMT",
>           y: 34
>         }, ... ]
>
> 형식이다.



## Data for Pie/Donuts/RadialBars

이 차트들은 series가 단일배열이여야 하고, label속성이 추가되어야한다.

```javascript
series: [23, 11, 54, 72, 12],
labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]
```

