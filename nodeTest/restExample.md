resetServer.js를 읽어보며, 이해하기.

PUT, POST에 `req.on('data')`와 `req.on('end')`가 쓰이는 걸 볼 수 있다.
요청의 본문에 들어 있는 데이터를 꺼내기 위한 작업.
req와 res도 내부적으로는 스트림(readStream, writeStream)으로 되있어 요청/응답의 데이터가 스트림 형식으로 전달됨.
다 받은 데이터는 문자열이기 때문에 JSON으로 만드는 과정이 필요함.