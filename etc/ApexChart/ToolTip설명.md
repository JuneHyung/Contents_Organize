# ToolTip

차트영역에서 마우스 over시 data 미리보기



툴팁에 대한 전역 옵션설정시 `Apex.tooltip`에서 저으이.



## Formatting

기본적으로 단일 인수 사용. 

이를 기반으로 새 값을 반환하는 포맷터를 통해 수정 가능.

`tooltip.x.formatter` : x축 값 레이블 formatter - 축 차트에 적용 가능

`tooltip.y.formatter` : y축 값 레이블 포맷터

`tooltip.z.formatter` : z축 값 레이블 포맷터 - 버블 차트에서만 적용 가능.



## DateTime Formatting

날짜 시간 값에 대한 X값 형식은 다음 처럼 지정가능.

`tooltip.x.format = "DD/MM"



## Theme

`tooltip.theme`으로 light | dark 가능



## Custom

[custom Tooltip](https://apexcharts.com/docs/options/tooltip/#custom)