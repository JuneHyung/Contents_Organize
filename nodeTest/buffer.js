const buffer = Buffer.from('버퍼로 바꿔보자');
console.log(`from: ${buffer}`)
console.log(`length: ${buffer.length}`)
console.log(`toString(): ${buffer.toString()}`)

const arr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기 ')]
const buffer2 = Buffer.concat(arr); // 배열의 버퍼들을 하나로 합침.
console.log(`concat(): ${buffer2.toString()}`);

const buffer3 = Buffer.alloc(5);
console.log(`alloc(): ${buffer3}`)