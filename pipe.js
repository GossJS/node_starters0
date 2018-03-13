const http = require('http');

const PORT = 4321;
const server = http.createServer().listen(PORT);
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  req.pipe(res);
});
console.log(`слушаем порт ${PORT}`);
