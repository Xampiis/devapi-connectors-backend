# Projeto DevApi Connectors Backend
## Descrição 
  API Rest criada com base no desafio da DevApi, que consiste em criar uma Web API que será consumida pelo portal web.
  
## Banco de Dados e Entidades
#### `MongoDB NoSQL - Conexão via cluster Atlas MongoDB Cloud.`

### Entidades
Users - Usuários
- name: string
- email: string
- password: string

Connectors - Conectores
- name: string
- type: string
- privacy: string
- base_url: string
- logo_url: string
- category: string
- description: string
- status: string

# Executando o Projeto
## Para acessar as requisições de Users e Connectors, é necessário a autenticação através do usuário padrão

- `Email: devapi1@devapi.com`
- `Password: 1234321`

#### Nota: Após o login é nescessário pegar o token obtido através da rota `Login` e enviar por `Authorization` do tipo Bearer Token ao realizar requisições para as outras rotas. 

## INSTALAÇÃO
## Lembre-se de executar os comandos na seguinte ordem:
### 1º - Instalar Dependências da Aplicação
- Para dar início ao projeto, é necessário dar o comando: 
```bash
$ npm install

ou

$ yarn install
```
### 2º - Comando Script para criar as informações de Users (Usuários)
```bash
$ npx nestjs-command create:user

ou

$ yarn nestjs-command create:user
```

### 3º - Comando Script para criar as informações de Connectors (Conectores) 
```bash
$ npx nestjs-command create:connector

ou

$ yarn nestjs-command create:connector
```
# Iniciando o servidor
## Na máquina local: 
```bash
$ npm start

ou

$ yarn start
```
## No Docker (Opcional): 
```bash
$ docker-compose up
```

## Testes Unitários (Controllers)
### Comando para realizar os `Testes Unitários`
```bash
$ npm run test

ou

$ yarn test
```
# Contato
### Redes Sociais 
- [Linkedin](https://www.linkedin.com/in/bruno-jacomini-b3916a17a)
- [Instagram](https://www.instagram.com/brunosj__)

© 2022 Desenvolvido por Bruno Jacomini.
