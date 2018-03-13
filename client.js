const http = require('http');
const querystring = require('querystring');

const port = 4321;
const postData = querystring.stringify({
  msg: 'Hello World!'
});
const options = {
  hostname: 'localhost',
  port,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};
const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  // Получение данных по фрагментам
  res.on('data', chunk => console.log(`STATUS: ${chunk}`));
  // Завершение ответа
  res.on('end', () => console.log('В ответе больше нет данных!'));
});
req.on('error', e => console.log(`проблема с запросом: ${e.message}`));
// Запись данных в тело запроса
req.write(postData);
req.end();
