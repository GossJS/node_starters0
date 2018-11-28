const options = {
  hostname: 'kodaktor.ru',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  port: 80,
  method: 'POST',
  path: '/api/req/%D0%98%D0%BB%D1%8C%D1%8F/%D0%93%D0%BE%D1%81%D1%81',
};
const r = require('http').request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  let b = '';
  res.on('data', d => b += d).on('end', () => console.log(b));
});

r.on('error', e => console.log(`проблема с запросом: ${e.message}`));
// Запись данных в тело запроса
r.write('name=%D0%98%D0%BB%D1%8C%D1%8F&familyname=%D0%93%D0%BE%D1%81%D1%81');
r.end();
