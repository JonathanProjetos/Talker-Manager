# Talker-Manager

# Contexto
Esta é uma aplicação aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações
Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e;
Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs

## Detalhes das rotas

#### Verbo GET : http://localhost:3000/

##### Esperado
  ```
  A rota somente confirma o status code 200.
 ```
    
#### Verbo Get : http://localhost:3000/talker

##### Esperado
 ```
A rota traz todos os talkers existentes 

   json
     [
        {
          "name": "Henrique Albuquerque",
          "age": 62,
          "id": 1,
          "talk": {
            "watchedAt": "23/10/2020",
            "rate": 5
          }
        },
        {
          "name": "Heloísa Albuquerque",
          "age": 67,
          "id": 2,
          "talk": {
            "watchedAt": "23/10/2020",
            "rate": 5
          }
        },
     */ ..... /*
     
 ```
    
#### Verbo Post : http://localhost:3000/login

##### Esperado
```
O endpoint espera receber um body com o formato como no exemplo abaixo

  json
    {
      "email": "email@email.com",
      "password": "123456"
    }
    
O endpoint deverá retornar um código de status 200 com o token gerado e o seguinte corpo
  
  json
    {
      "token": "7mqaVRXJSp886CGr"
    }
    
```


#### Verbo Post : http://localhost:3000/talker

##### Esperado

```
O endpoint espera receber um body com o formato como no exemplo abaixo.

   json
      {
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    }
 ```   
    
- A requisição deve ter o token de autenticação nos headers, no campo authorization, os metodos precisão ser utilizados usando softwares como insomia, postman, httpie entre outros
 
- Caso o token não seja encontrado será retornado um código de status 401, com o seguinte corpo:
  ```json
  {
    "message": "Token não encontrado"
  }
  ```

- Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

#### Verbo Get : http://localhost:3000/talker/search?q=Helo

##### Esperado

- O endpoint espera receber uma palavra ou letras que relaciona com talkers cadastrados. exemplo abaixo:

    ```json
    [
      {
        "name": "Heloísa Albuquerque",
        "age": 67,
        "id": 2,
        "talk": {
          "watchedAt": "23/10/2020",
          "rate": 5
        }
      }
    ]
    ```


#### Verbo Delete : http://localhost:3000/products/2

##### Esperado
```
A rota espera receber um id que seja compatível com um id de um produto existente no banco.

```
## Detalhes de endereços da rota Sales

#### Verbo GET : http://localhost:3000/sales

##### Esperado
```
A rota traz todas as vendas cadastrados no banco.
 json
  [
     {
	"saleId": 1,
	"date": "2022-08-14T10:08:20.000Z",
	"productId": 1,
	"quantity": 5
     },
     {
	"saleId": 2,
	"date": "2022-08-14T10:08:20.000Z",
	"productId": 3,
	"quantity": 15
     }
    */ ...../*
  ]

```

#### verbo Post : http://localhost:3000/sales

##### Esperado
```
A rota post espera um body com este formato para cadastrar uma venda 
 json
  [
    {
      "productId": 1,
      "quantity":1
    },
    {
      "productId": 1,
      "quantity":2
    }
  ]
  
A rota responde, caso bem sucedido um objeto neste formato:

 json
     {
	"id": 3,
    "itemsSold": [
	  {
    	     "productId": 1,
	     "quantity": 1
	  },
	  {
	     "productId": 1,
	     "quantity": 2
	  }
    	]
      }
```
#### Verbo Get : http://localhost:3000/sales/1

##### Esperado

```
A rota espera receber um id para a busca de todas as vendas vinculado a este id.
   json
      [
	{
  	   "date": "2022-08-14T10:08:20.000Z",
	   "productId": 1,
	   "quantity": 5
	}
      ]

```
#### Verbo Put : http://localhost:3000/sales/1

##### Esperado
```
O verbo put espera rebeber um id de uma venda existente no banco e um body com os valores para edição de um produto existente no banco.
 json     
  [
    {
      "productId": 1,
      "quantity":10
    },
    {
      "productId": 2,
      "quantity":50
    }
  ]
  
 A rota responde, caso bem sucedido um objeto neste formato:
 
      {
	"id": 3,
    "itemsSold": [
	  {
    	     "productId": 1,
	     "quantity": 1
	  },
	  {
	     "productId": 1,
	     "quantity": 2
	  }
    	]
      }
```
#### Verbo Delete : http://localhost:3000/sales/1

##### Esperado

```
A rota espera receber um id para exclusão de uma venda caso ela exista.
  
```

## Técnologias usadas

> Desenvolvido em nodejs.

> Drive : Mysql

> Framework utilizado: Express.

> Libs: Joi, nodemon, express-async-errors, mysql2, eslint, sinon, mocha, chai, dotenv, body-parser

## Instalando Dependências

> Node
```bash
cd Store-Manager/
npm install
``` 
> Docker
```
cd Store-Manager/
npm install
docker-compose up -d
```
## Rodando a aplicação
```
cd Store-Manager/
npm run debug
```

## Aviso Importante 
Caso queira roda a aplicação via docker deverá ter o docker instalado no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial 

## Executando Testes

* Para rodar todos os testes:

> Test
```bash
cd Store-Manager/ 
npm test
``` 


## Técnologias usadas

Back-end:
> Desenvolvido usando: Docker, Docker-compose

## Instalando Dependências

> Docker
```bash
cd api/ 
npm install
``` 
## Aviso Importante 
Para roda a aplicação e necessário esta com o docker instalado  no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial 

## Executando Testes

* Para rodar todos os testes:

> Test
```bash
cd src/ 
npm test
``` 



# 🚧 README em construção 🚧

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
