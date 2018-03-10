const http = require('http');
const moment = require('moment');

http.createServer((req, res) => {
  res.end(moment().format('DD.MM.YYYY HH:mm:ss'));
}).listen(4321);
