const http = require('http');
const querystring = require('querystring');

const PORT = 4321;
const server = http.createServer().listen(PORT);
server.on('request', (req, res) => {
  if (req.method === 'POST') {
    let body = '';
    // Чанк данных присоединяется к body
    req.on('data',  (data) => {
      body += data;
    });
    // Переданные данные
    req.on('end', () => {
      const post = querystring.parse(body);
      console.log(post);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World\n');
    });
  }
});
console.log(`слушаем порт ${PORT}`);
