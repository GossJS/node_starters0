# node_starters0

`mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b json https://github.com/GossJS/node_starters0.git .`

`yarn`

`npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest`

`atom .`

`yarn start`


Следующий репозиторий: https://github.com/GossJS/node_starters1
