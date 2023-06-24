const crypto = require('crypto');

console.log('base64 ', crypto.createHash('sha512').update('비밀번호').digest('base64'))
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'))
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'))

// node hash

/**
 * 
 * createHash(알고리즘) : 사용할 해시 알고리즘
 * md5, sha1, sha256, sha512등이 가능 => md5와 sha1은 취약점이 발견됨.
 * 
 * update(문자열) : 변환할 문자열
 * 
 * digest(인코딩) : 인코딩하 ㄹ알고리즘
 * base64, hex, latin1
 */