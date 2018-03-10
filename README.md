# node_starters0
8.5.0 ESM starter

In late Sep 2017 they gave us experimental support of native modules in Node 8.5.0

So now we introduce an updated Node app creation lifecycle

`mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && https://github.com/GossJS/node_starters0.git .`

`yarn`

`npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest`

`atom .`

`yarn start`

https://www.webpackbin.com/bins/-KuZOEOPlJcOdJMLki54

Следующий репозиторий: https://github.com/GossJS/node_starters1
