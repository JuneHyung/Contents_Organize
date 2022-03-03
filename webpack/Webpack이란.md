# Webpack

## 웹팩이란?

최신 프런트 엔드 프레임 워크에서 가장 많이 사용되는 **모듈 번들러(Module Bundler)**<br/>(웹 애플리케이션의 자원을 각각의 모듈로 보고 이를 조합해 병합된 하나의 결과물을 만드는 도구.)



## 모듈이란?

특정 기능을 가지는 작은 코드 단위.

**성격이 비슷한 기능들을 하나의 의미 있는 파일**로 관리하면 **모듈**이 된다.



[Modules 참고](https://babeljs.io/docs/en/learn#modules)

```javascript
// lib/math.js
function sum(x, y) {
  return x + y;
}
var pi = 3.141593;
export { sum, pi}
```

```javascript
// app.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

// otherApp.js
import {sum, pi} from "lib/math";
console.log("2π = " + sum(pi, pi));
```



## 웹팩에서 모듈

js모듈뿐만 아니라 **웹 애플리케이션을 구성하는 모든 자원**을 의미

ex) HTML, CSS, Javascript, Images, Font, etc...



## 모듈 번들링이란?

웹 애플리 케이션을 구성하는 많은 자원들을 하나의 파일로 병합 및 압축 해주는 동작.

![모듈번들링](D:\Vue\Contents_Organize\webpack\readme_images\module-bundling.png)

❗ 빌드, 번들링, 변환 모두 같은의미.