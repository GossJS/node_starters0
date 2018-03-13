const http = require('http');

const PORT = 4321;
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.pipe(res);
  })
  .listen(PORT, () => console.log(`слушаем порт ${PORT}`));
