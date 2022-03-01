# Node.js와 NPM

## 웹팩 핸드북

[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)



## Node. JS와 NPM

### [NPM](https://www.npmjs.com/)

**Node Package Manager**

자바스크립트 프로그래밍 언어를 위한 패키지 관리자

```shell
노드 버전 확인 : node -v
npm 버전 확인 : npm -v
```



### NPM 초기화 명령어 - init

```shell
npm -init
```

* package name : 
* version
* description
* entry point
* test command
* git repository
* keyword
* author
* license
* ...

최종적으로 나오는 모습을 보여주고 OK

package.json이 생성된다.

```shell
npm init -y
```

위의 사항들을 엔터치면서 눌렀는데 -y를 추가하게되면 자동생성을 해준다.



### NPM 설치 명령어

```shell
npm install libraryName
```

ex ) npm install jquery

node_modules폴더가 생성되고 그안에 해당 라이브러리의 폴더가 생성된다.



### NPM 사용하는 이유와 첫 번째 장점

개발 중 필요한 라이브러리를 중간에 삽입하는 경우가 있는데,

중간에 어딘가 들어가면 동작은 하지만, 나중에 다른 사람이 봤을 때 찾는데 어려움이 있다. => 유지보수가 어렵다.

라이브러리 간의 의존관계들이 있을 경우에도 관리가 어려워진다.

이 떄 package.json에 정리가 되있다면 **라이브러리의 관리가 쉬워진다.**



## NPM의 두 번째 장점

NPM을 사용하지 않고, CDN을 사용한다면, 브라우저에 가서 각 사이트에 가서 script태그를 들고와야하는 번거로움이 있다.

일일이 들고오는것 보다는 npm install을 이용해 **손쉽게 가져올 수 있다.**