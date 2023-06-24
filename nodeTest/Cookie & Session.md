```javascript
...
if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } 
...
```

Expires나 HttpOnly, Path같은 옵션 부여가 가능하다.
쿠키에는 한글과 줄바꿈이 들어가면 안되는데 한글은 encodeURIComponent로 감싸서 넣어준다.

**Options**
* 쿠키명=쿠키값  : 기보적인 쿠키의 값.
* Expires=날짜 : 만료기한
* Max-age=초 : 날짜 대신 초를 입력 할 수 있으며, 초가 지나면 쿠기가 제거됨.
* Domain=도메인명 : 쿠키가 전성될 도메인 특정 가능
* Path=URL : 쿠키가 전성될 URL을 특정. 기본값은 '/' => 모든 경로에서 쿠키 전송가능
* Secure : HTTPS인 경우만 쿠키 전송
* HttpOnly : 설정 시 자바스크립트에서 쿠키에 접근 불가능. => 쿠키조작 방지를 위해 설정해놓는게 좋다.

❗ 새로고침 시 로그인이 유지되지만, 민감한 개인 정보를 쿠키에 넣어두는 것은 적절하지 못하다.


서버가 사용자 정보를 관리하도록 만들어 보면,
```javascript
...
if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8085');
    const name = url.searchParams.get('name');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    const uniqueInt = Date.now();
    session[uniqueInt] = {
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } 
...
```

쿠키에 이름 대신 uniqueInt라는 숫자값을 보냈다.
사용자의 이름과 만료시간은 uniqueInt속성명 아래에 있는 session이라는 객체에 대신 저장함.
이제 만료기한을 넘기지 않았으면 session변수에서 사용자 정보를 가져와 사용함.
이 방식이 **session**이다.

**session**
서버에 사용자 정보를 저장하고 클라이언트와는 세션아이디로만 소통함.
꼭 쿠키를 사용해서 주고받지 않아도 된다.
세션을 이용한 쿠키를 세션쿠키라고한다.

> 실제로는 세션을 위와같이 변수에 저장하지 않는다.<br/>
서버가 멈추거나 재시작하면 메모리에 저장된 변수가 초기화 되고, 서버메모리가 부족하면 세션을 저자하지도 못한다.<br/>그래서 보통은 `Redis`나 `Memcached`같은 데이터베이스에 넣어둔다.

❗ 위 방법은 예시이지 그대로 사용하면 안된다. => 쿠키를 악용한 여러 위협을 방어하지 못하고, 세션 아이디값이 공개되있어 누출되면 다른 사람이 사용할 수도 있다
