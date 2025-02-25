
# Sistema de Cadastro Simples com HTML, CSS E JS.

Desenvolvido por: João Henrique de Oliveira

***
## Objetivo do Projeto

O Principal objetivo do projeto, era desenvolver um sistema de cadastro de usuários, utilizando JavaScript e LocalStorage para armazenar os Dados dos usuários.


## Desenvolvimento do Projeto

O Projeto de certa maneira, foi bem simples de se fazer, pois já tinha conhecimento prévio das funcionalidades e também das ferramentas utilizadas (JS e LocalStorage).

Pelo fato do Projeto ser simples e não muito extenso, decidi por usar apenas a estrutura básica de pastas para Projetos Web, que consiste:

```
├── README.md 
├──.gitignore
├── src
  ├── index.html
  └── assets
        ├───images
        ├───css
        │ └── styles.css
        └──js
          ├──classes
          │     ├──userManager.js
          │     ├──userFactory.js
          │     └──user.js
          ├──utils
          │     └──utils.js
          └──index.js
```
A pasta `images`, possui apenas prints para a criação do Readme

O Arquivo `index.html`, contém o HTML para criar a visualização da tela, onde há um formulário básico e uma tabela, para realizar a exibição dos usuários cadastrados.

O Arquivo `styles.css`, contem o CSS para realizar a estilização básica do arquivo HTML.

O `index.js`, contém toda a lógica de manipulação da DOM chamando os métodos necessários para cada evento.

O `userFactory.js` é a classe que concentra toda a lógica e métodos para criação usuários utilizando o Factory Method.

O `userManager.js` é a classe responsável pela manipulação dos dados dos usuários, como consulta, filtro, inserção e remoção. 

O `user.js` é a classe responsavél por definir os atributos do usuário e seus metódos, caso tenha algum.

O `utils.js` é um arquivo .js que possui diversas funções que podem ser utilizadas muitas vezes, por diferentes arquivos, como conversões por exemplo.



## Funcionalidades

- Cadastro de usuários
- Exclusão de usuários
- Filtrar por nome de usuário


## Utilizando o Sistema

Clone o projeto ou baixe os arquivos direto pelo navegador.
```bash
  git clone https://link-para-o-projeto
```

Entre na pasta src do projeto.

```bash
  cd src
```
E basta abrir o arquivo index.html.

### Inicio
***
Ao abrir, você irá se deparar com essa tela, onde você conseguirá fazer tudo através dela:

![App Screenshot](./src/assets/images/Inicio.png)

### Cadastrando um Usuário
***
Para cadastrar um usuário, basta Preencher todos os campos de maneira correta e clicar em cadastrar novo usuário:
> Lembretes:
* E-mail e Telefones são únicos para cada usuário, não podem ser repetidos
* Usuário deve ser maior de 18 anos para ser cadastrado

Caso esteja tudo nos conformes, um alerta confirmando a adição será exibido:

![App Screenshot](./src/assets/images/Sucesso.png)

e Logo em seguida da confirmação, o usuário aparecerá na tabela

![App Screenshot](./src/assets/images/Sucesso2.png)

### Excluindo usuário
***
Para excluir um usuário Desejado, basta clicar em Excluir na linah do usuário e logo em seguida confirmar o alerta com OK, da seguinte maneira:

![App Screenshot](./src/assets/images/Exclusao.png)

Um Alerta de Confirmação será emitido

![App Screenshot](./src/assets/images/SucessoExcl.png)

E Depois o mesmo será removido

![App Screenshot](./src/assets/images/SucessoExcl2.png)

**Caso você tenha cancelado a operação**

Apenas irá mostrar um alerta e nada acontecerá
![App Screenshot](./src/assets/images/CanceladaExcl.png)



### Possíveis Erros ao cadastrar usuário
***
Caso tente cadastrar um usuário menor de 18 anos, o sistema irá emitir um alerta e reiniciar a operação de cadastrado

![App Screenshot](./src/assets/images/ErroIdade.png)

### Filtrando Usuário
***
Caso tenha mais que um usuário e deseje pesquisar/filtrar pelo nome, basta você digitar o nome do usuário e Clicar em Pesquisar que aparececerá somente os usuários que forem iguais ao que você digitou:

![App Screenshot](./src/assets/images/Filtro1.png)

![App Screenshot](./src/assets/images/Filtro2.png)

Caso deseje remover o filtro, basta clicar em limpar pesquisa e pronto, voltrá ao normal

![App Screenshot](./src/assets/images/Filtro1.png)

### Outros possíveis erros
***
Caso você tente adicionar um usuário no qual ja tenha email e/ou telefone cadastrado, o seguinte alerta irá aparecer: 

![App Screenshot](./src/assets/images/ErroTelEmail.png)



