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



## NPM (Node Package Manager)

### 지역설치 명령어와 제거 명령어 - uninstall

```shell
npm install packageName
npm uninstall packageName
```

삭제 시 package.json에서 해당 이름이 지워진다.



### NPM 전역 설치 명령어 - install --global

```shell
npm install packageName --global
npm install packageName -g
```

node_modules폴더에 해당 packageName이 없는 것을 볼 수 있다.

--global과 -g둘 다 같은기능.



### 전역으로 설치된 라이브러리 경로 확인

[NPM 전역 라이브러리 설치 경로](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#npm--전역-설치-경로)

```text
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
```



### 지역 설치와 전역 설치 비교

지역설치 시 node_modules폴더 아래 설치되는것을 볼 수 있다.

정녁 설치 시 node_modules폴더 아래에 설치되지않고, 지정된 전역폴더에 저장이 된다.



### NPM 지역 설치 옵션 2가지

* --save-prod
* --save-dev

아래처럼 사용 가능

```shell
npm install packageName
npm install packageName -D
```

package.json에 devDepenedencies가 따로 생긴 걸 볼 수 있다.



### dependencies와  devDependencies

dependencies

* npm i jquery jquery-ui



devDependencies

* npm i vue -D



애플리케이션 로직(화면구현)과 관련있는 경우 Dependencies<br/>ex) vue, react, angular, chart, ...

개발 시 도움을 주는 개발보조 라이브러리의 경우 Dependencies<br/>ex) webpack, js-compress, sass, ...



### 개발용 라이브러리와 배포용 라이브러리 구분하기

설치된 배포용 라이브러리는 `npm run build`로 빌드하면 최종 애플리케이션 코드에 포함된다.

devDependencies라이브러리는 배포에 포함되지 않는다.

* webpack: 빌드도구
* eslint: 코드 문법 검사 도구
* imagemin: 이미지 압축 도구