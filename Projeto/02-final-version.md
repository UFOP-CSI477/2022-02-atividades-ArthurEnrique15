# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Arthur Enrique*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

O trabalho implementado é uma API para gestão financeira pessoal. O usuário tem a ppssibilidade de controlar seus gastos e se manter informado sobre o seu saldo 

### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->

- Cadastro de usuário
- Login de usuário
- Listagem do extrato
- Exibição do saldo
- Inserção de lançamentos no extrato
  
### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->

- Listagem dos lançamentos no extrato de apenas os últimos 90 dias
- Solicitação de lançamentos a partir de 90 dias, selecionando o período desejado
- Disponibilização dos lançamentos solicitados em um arquivo .pdf para download

As funcionalidades acima não foram implementadas devido ao tempo de desenvolvimento. A complexidade para disponibilizar um arquivo para pdf seria relativamente grande comparado ao restante do desenvolvimento, por isso optei por não implementar tais funcionalidades.

### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->

Todas as funcionalidades implementadas estavam previstas.

### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->

No geral foi uma API simples de ser implementada, não tive muitas dificuldades. Porém, foi um pouco difícil lidar com o json web token pelo frontend, pois o vite não tem suporte para libs nativas do nodeJS, e no backend eu utilizava a lib *jsonwebtoken* pra gerar o token do usuário. Então não dava pra eu simplesmente instalar a mesma lib no frontend para decodificar o token para pegar o nome do usuário e exibir na Home.

Isso me custou algumas horas de pesquisa para descobrir como eu poderia decodificar o token pelo front, até que eu descobri uma lib chamada *jwt-decode*, que serve exatamente para fazer o que eu estava precisando.

### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->

#### Backend

**1. Instalação das libs**

Eu costumo utilizar o *yarn* como package manager nos meus projetos, porém o npm também funciona aqui, mas o lockfile das libs é uim yarn.lock, então a trava de versões das libs não funcionará se você utilizar o npm, o que pode causar problemas de conflitos entre versões de libs ou mal funcionamento do código.

Portanto, recomendo a utilização do yarn aqui para instalação das libs utilizadas, tanto no backend quanto no frontend. Lembrando que para isso é necessário instalar o yarn primeiro.

Para instalar as libs, basta executar o comando **yarn**.

**2. Criação do banco de dados e variáveis de ambiente**

Como o PostgreSQL foi utilizado para o banco de dados da tarefa, recomendo a utilização do pgAdmin para manuseio do banco.

Primeiramente é necessário criar o schema do banco de dados. Para isso, ao abrir o pgAdmin, basta clicar com o botão direito em *Databases*, depois em *Create* e em seguida *Database...*. Depois é só preencher o nome do banco e selecionar o usuário.

Em seguida, volte até a pasta raiz do projeto (*/Projeto/backend*) e crie um arquivo chamado **.env**, copie o conteúdo do arquivo **.env.example** e cole no novo arquivo criado.

Agora é necessário preencher os valores das variáveis de ambiente. Recomendo colocar no campo *DB_PORT* o valor **5432**, a porta padrão do postgres. Os demais valores dependem do que foi preenchido ao criar o banco, ou seja, o nome do banco criado e o nome do usuário que foi selecionado como *Owner*, e sua senha.

O campo *PORT* é a porta na qual o servidor node irá executar, então cuidado para não preencher com uma porta que já está em uso ou bloqueada. Recomendo a porta 3333.

**3. Migrações para criar as tabelas**

Após preencher todas as variáveis de ambiente, execute o comando **yarn dev** para verificar se a conexão com o banco está sendo feita corretamente. O servidor deve logar algo semelhante ao seguinte:

```bash
yarn dev

> trab@1.0.0 dev
> ts-node-dev --transpile-only --ignore-watch node_modules --poll --respawn src/server.ts

[INFO] 20:27:01 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.9.4)
Server is running on port 3333
Data Source has been initialized!
```

Caso esteja rodando corretamente, finalize a execução pressionando Ctrl+C. Em seguida, execute o comando **yarn typeorm:run** para aplicar todas as migrations do typeorm, criando todas as tabelas da aplicação.

Assim que o comando for finalizado, execute **yarn dev** para subir a aplicação novamente.

#### Frontend

Para executar o frontend, primeiro também é necessário instalar as libs do projeto. Para isso, navegue até a pasta */Projeto/frontend* e utilize o comando **yarn**.

Crie um arquivo .env na raiz do projeto baseado no .env.example, e coloque nele a url em que o servidor está rodando.

Depois disso é só executar o comando **yarn dev** no terminal, e acessar a url http://localhost:3000

**Obs**: o frontend roda na porta 3000, então certifique-se de que a porta está livre.
