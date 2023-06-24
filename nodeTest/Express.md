**Express**

서버를 제작하는 과정에서 겪게 되는 불편을 해소하고 편의 기능을 추가한 웹 서버 프레임워크.

Express는 http 모듈의 요청과 응답 객체에 추가 기능들을 구현함.

=> if문으로 요청 메서드와 주소 구별하지 않아도 된다.


Express 프로젝트를 시작하기 위해 먼저 package.json파일을 작성.

```json
{
  "name": "learn-express",
  "version": "0.0.1",
  "scripts": {
    "start": "nodemon app"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}
```
`nodemon`은 서버 코드에 수정 사항이 생길 때 마다 매번 서버를 재시작해야하는데 이때 자동으로 재시작 시킨다.

rs를 입력해 수동으로 재시작 할 수도 있따.

❗ 개발용으로만 사용. 배포 후에는 서버 코드가 빈번하게 변경될일이 없기 때문.

app.set으로 서버가 실행될 포트 설정함. 기본값으로 3000번 포트 이용하게 되있다.


<br/>
<br/>

`미들웨어`는 익스프레스의 핵심.

요청과 응답의 중간에 위치하기 때문에 미들웨어라 부른다.

라우터와 에러 핸들러 또한 미들웨어의 일종이다.

`app.use(미들웨어)`형태로 app.use와 함께 사용됨.

```javascript
app.set('port', process.env.PORT || 3000)l

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됨.');
  next();
});

app.get('/', (req, res, next)=>{
  console.log('GET / 요청에서 실행됨')
  next();
}, (req, res)=>{
  throw new Error('에러는 에러 처리 미들웨어로 감.')
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

```


> next()<br/>
다음 미들웨어로 넘어가는 함수.<br/>실행하지 않으면 다음 미들웨어가 실행되지 않는다.

* app.use(미들웨어) : 모든 요청에서 미들웨어 실행
* app.use('/abc', 미들웨어) : abc로 시작하는 요청에서 미들웨어 실행
* app.post('/abc', 미들웨어) : abc로 시작하는 POST요청에서 미들웨어 실행

❗ 에러처리 미들웨어는 반드시 err, req, res, next로 4개여야 한다.

<br/>

**morgan**

요청과 응답에 대한 정보를 콘솔에 기록함.

`app.use(morgan('dev'))` 

dev외에 combined, common, short, tiny등 넣을 수 있다. 인수를 바꾸면 로그가 달라짐.

ex) 개발환경 - dev, 배포환경 - combined

<br/>

**static**

정적인 파일들을 제공하는 라우터 역할.

기본적으로 제공되서 따로 설치 필요없이 express 객체 안에서 꺼내 장착하면 된다.


**body-parser**

요청의 본문에 데이터를 해석해 req.body객체로 만들어주는 미들웨어

멀티 파트(이미지, 동영상, 사진)의 데이터는 처리하지 못함.

`multer`모듈 사용

<br/>

**cookie-parser**

요청에 동봉된 쿠키를 해석해 req.cookies객체로 만든다.

<br/>

**express-session**

세션 관리용 미들웨어.

로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 유용.

세션은 사용자별로 req.sessionㄱ개체 안에 유지됨.

<br/>

**Router객체 분리**

routes폴더를 만들어 router분리
index.js

```javascript
const express = require('express');
const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.send('Hello, Express');
});

module.exports = router;

```

user.js
```javascript
const express = require('express');
const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

module.exports = router;

```

app.js
```javascript
...
const path = require('path');

dotenv.config();
const indexRouter= require('./routes')
const userRouter = require('./routes/user')
...
  name: 'session=cookie',
}));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
  res.status(404).send('Not Found');
})

app.use((err, req, res, next)=>{
  ..
})

```