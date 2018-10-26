# node_starters0


`mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b simple https://github.com/GossJS/node_starters0.git . && yarn`

`atom .`

`yarn start`

---

В REPL можно упоминать имена встроенных пакетов, и они будут самозагружаться.

```JavaScript
http.Server((r, res) => console.log(querystring.parse(r.url.substring(1+r.url.indexOf('?')))) || res.end('hello world')).listen(9999);
`

Здесь мы разбираем строку после вопросительного знака, т.е. QUERY_STRING – в самом по себе объекте Request, который помещается в r модулем http, есть только url. 

Результатом будет объект: для http://localhost:9999/?name=ilya&fname=goss получим { name: 'ilya', fname: 'goss' }

---

Следующий репозиторий: https://github.com/GossJS/node_starters1
