# Atividade prática 1

## Tecnologias utilizadas

Para o desenvolvimento dos CRUDs eu usei o Node.js com Express e Typescript. O banco de dados é no PostgreSQL, e usei o Typeorm para facilitar a integração do banco com o código. Também fiz uso do eslint para padronizar o estilo do código automaticamente.

## Instalação

Para começar, clone o repositório e entre dentro da pasta *Atividades/atividade-pratica-01* pelo terminal.

Em seguida, execute o comando **npm install** para instalar todas as dependências do projeto

**Obs: é necessário que o node esteja instalado para utilizar o npm.**

## Criação do banco de dados e variáveis de ambiente

Como o PostgreSQL foi utilizado para o banco de dados da tarefa, recomendo a utilização do pgAdmin para manuseio do banco.

Primeiramente é necessário criar o schema do banco de dados. Para isso, ao abrir o pgAdmin, basta clicar com o botão direito em *Databases*, depois em *Create* e em seguida *Database...*. Depois é só preencher o nome do banco e selecionar o usuário.

Em seguida, volte até a pasta raiz do projeto (*atividade-pratica-01*) e crie um arquivo chamado **.env**, copie o conteúdo do arquivo **.env.example** e cole no novo arquivo criado.

Agora é necessário preencher os valores das variáveis de ambiente. Recomendo colocar no campo *DB_PORT* o valor **5432**, a porta padrão do postgres. Os demais valores dependem do que foi preenchido ao criar o banco, ou seja, o nome do banco criado e o nome do usuário que foi selecionado como *Owner*, e sua senha.

O campo *PORT* é a porta na qual o servidor node irá executar, então cuidado para não preencher com uma porta que já está em uso ou bloqueada. Recomendo a porta 3333.

## Migrações para criar as tabelas

Após preencher todas as variáveis de ambiente, execute o comando **npm run dev** para verificar se a conexão com o banco está sendo feita corretamente. O servidor deve logar algo semelhante ao seguinte:

```bash
npm run dev

> trab@1.0.0 dev
> ts-node-dev --transpile-only --ignore-watch node_modules --poll --respawn src/server.ts

[INFO] 20:27:01 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.9.4)
Server is running on port 3333
Data Source has been initialized!
```

Caso esteja rodando corretamente, finalize a execução pressionando Ctrl+C. Em seguida, execute o comando **npm run typeorm:run** para aplicar todas as migrations do typeorm, criando todas as tabelas da aplicação.

Assim que o comando for finalizado, execute **npm run dev** para subir a aplicação novamente.

## Rotas da API

Para realizar as requests, será necessário ter o Insomnia instalado.

Dentro do insomnia, basta importar a collection de requests no arquivo *requests_collection.json*, que todas as rotas serão importadas para o aplicativo.