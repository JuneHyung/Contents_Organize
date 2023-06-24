const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf-8', 'base64')
result += cipher.final('base64');
console.log('암호화: ', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf8');
console.log('복호화: ', result2 );


/**
 * 
 * crypto.createCipheriv(알고리즘, 키, iv)
 * 암호화 시 사용.
 * AES 암호화 찾아보기.
 * crypto.getCiphers()로 사용 가능한 알고리즘 목록 확인 가능
 * 
 * cipher.update
 * 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣음.
 * 
 * cipher.final
 * 출력 결과물의 이노딩을 넣으면 암호화가 완료
 * 
 * crypto.createDecipheriv
 * 복호화 시 사용
 * 암호화 때 사용한 알고리즘, 키, iv를 그대ㅗㄹ ㄴ허어야 함.
 * 
 * decipher.update
 * 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩
 * 
 * decipher.final
 * 복호화 결과물의 인코딩을 넣음.
 */