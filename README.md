# node_starters0


`mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b event https://github.com/GossJS/node_starters0.git .`

`yarn`

`npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest`

`atom .`

`yarn start`

Для вывода разницы между этой ветвью и предыдущей:

`git diff json..event`

или конкретно для файла со сценарием:

`git diff json event -- index.js`

![alt scheme](git-checkout.png "Разница в ветвях")
