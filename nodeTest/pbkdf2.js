const crypto = require('crypto');

crypto.randomBytes(64, (err, buf)=>{
  const salt = buf.toString('base64');
  console.log('salt: ', salt)
  crypto.pbkdf2('비밀번호', salt, 10000, 64, 'sha512', (err, key)=>{
    console.log('password: ', key.toString('base64'));
  })
})

// node pbkdf2


/**
 * 단방향 암호화
 * 
 * randomBytes메서들로 64바이트 길이의 문자열을 만듬.
 * 
 * pbkdf2의 인수 : 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
 * 해시 알고리즘(sha512)을 예시의 경우 10만번 반복해서 적용
 * 
 * crypto.randomBytes와 pbkdf2는 내부적으로 스레드 풀을 사용해 멀티 스레딩으로 동작함.
 * 
 * bcrypt나 scrypt보다 취약해 보안이 더 필요하면 2개중 한개로 변경.
 */