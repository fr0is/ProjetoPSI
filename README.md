# ProjetoPSI

Como aceder atraves do appserver:

1-Abrir 2 consolas(backend e frontend)

2-Fazer "ssh psi021@appserver.alunos.di.fc.ul.pt" nas 2 consolas. Pass:psi021

3-Na consola do frontend "ng serve --port 3021 --host 0.0.0.0 --disableHostCheck true"

4-Na consola do backend "SET DEBUG=bakcendNew:* | npm start"

##################################################################

Aceder ao mongo

mongo --username psi021 --password --authenticationDatabase psi021 appserver.alunos.di.fc.ul.pt/psi021
