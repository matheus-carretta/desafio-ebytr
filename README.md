# Desafio Ebytr - *To Do List*

## Boas vindas ao repositório do Desafio Técnico - Caso da empresa Ebytr

A empresa **Ebytr** está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
Na Ebytr o time de desenvolvimento utiliza a Stack **MySQL**, **Express**, **React** e **Node** para criar suas aplicações. Foi combinado com a Ebytr que será utilizada essa mesma Stack para resolver o problema de organização e produtividade da empresa.

---

### Ferramentas necessárias

- [Visual Studio Code](https://code.visualstudio.com/download) - para melhor visualização do código
- [Git](https://git-scm.com/downloads) - para clonar esse repositório
- [Node.js](https://nodejs.org/en/download/) - para instalar os pacotes de dependência
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) - para armazenar os dados da aplicação


### Passo a passo para a inicialização

1. Abra um terminal no seu computador e escolha uma pasta
    - Rode o comando:  ` git clone git@github.com:matheus-carretta/desafio-ebytr.git`
    - Em sequência: `cd desafio-ebytr && code .`  para abrir o código no VSCode
2. Configure a conexão com o banco de dados na pasta  backend/src/db/config/database.js
    - Dentro de options altere as variáveis host, port, database, username e password conforme as configurações de acesso no seu banco MySQL.
3. Configure a porta do servidor (se não houver impedimento em rodar na porta 3002, pule essa etapa)
    - Acesse a pasta backend/src/server.js e altere o valor de 3002 para a porta escolhida
    - Caso altere a porta, é necessário acessar a pasta frontend/src/utils/api e em todas funções substituir o valor 3002 para a porta desejada
4. Após configurar a conexão e o servidor, a partir da pasta raiz do projeto, rode os comandos
    - `npm run i-dependencies` para instalar as dependências do projeto.
    - `npm run prestart` para criar e popular o banco de dados da aplicação.
    - `npm run server` para iniciar o servidor. Não feche este terminal para que o servidor continue rodando.
    - Abra outro terminal e execute `npm run front` para abrir a aplicação no browser.


---
### Requisitos técnicos

- [x] Front-End em React;
- [x] Back-End em NodeJS, com MySQL;
- [x] Arquitetura em camadas;

### Funcionalidades

- [x] Visualizar a lista de tarefas;
    - [ ] Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- [x] Inserir uma nova tarefa na lista;
- [x] Remover uma tarefa da lista;
- [ ] Atualizar uma tarefa da lista;
- [ ] A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

### Testes
A aplicação possui testes automatizados no backend utilizando as libs mocha, chai, sinon e chai-http. Os testes para o frontend ainda estão em desenvolvimento.

Para rodar os testes:
- Acesse a pasta /backend
- Rode o comando `npm test`
- Para saber a coebrtura dos testes `npm run coverage`

---
## Funcionamento
<img src='./gif.gif'></img>