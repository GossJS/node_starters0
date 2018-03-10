const http = require('http');
const moment = require('moment');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ date: moment().format('DD.MM.YYYY HH:mm:ss') }));
}).listen(4321);
