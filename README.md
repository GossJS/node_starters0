Голый сервер, обрабатывающий POST-запрос и клиент к нему.

Посылать можно и любым другим клиентом.

`mkdir $(date +%Y%m%d_%H%M%S) && cd $_`

`svn checkout https://github.com/GossJS/node_starters0/branches/client_server .`

(в адресе https://github.com/GossJS/node_starters0/tree/client_server tree заменено на branches)


после запуска эхо-сервера (pipe2.js) можно общаться с ними наиболее просто с помощью curl:

`curl localhost:4321 -d 'hello'`

hello
