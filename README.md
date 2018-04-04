# node_starters0
8.5.0 ESM starter

In late Sep 2017 they gave us experimental support of native modules in Node 8.5.0

So now we introduce an updated Node app creation lifecycle

`mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone https://github.com/GossJS/node_starters0.git .`

`yarn`

`npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev eslint-config-airbnb@latest`

`atom .`

`yarn start`

---
Ветки simple, json и event соответствуют заданию http://kodaktor.ru/pract-II-lab-t2-json.pdf

simple - шаги 1..6
json - шаг 7..8
event - шаг 9..

---
Следующий репозиторий: https://github.com/GossJS/node_starters1

Установка node

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

```
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```

https://kodaktor.ru/g/node

```
mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && yarn init -y && atom .
```
