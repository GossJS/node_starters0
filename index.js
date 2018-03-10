const http = require('http');
const moment = require('moment');

const server = http.createServer();
server.listen(4321);
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ date: moment().format('DD.MM.YYYY HH:mm:ss') }));
});
