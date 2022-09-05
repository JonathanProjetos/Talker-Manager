# Talker-Manager

# Contexto

Esta é uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações, a aplicação não acessa o banco e todo o método e feito usando módulos do nodejs para manipular o arquivo talker.json usando fs.readFile() para leitura e fs.writeFile() para a escrita.

## Importante:

- Para consumo da aplicação será nescessario o uso de um software  de envio de requisições REST como:
- [Insomia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- [Httpie](https://httpie.io/)

## Detalhes das rotas

#### Verbo GET : http://localhost:3000/

##### Esperado
  ```
  O endpoint somente confirma o status code 200.
 ```
    
#### Verbo Get : http://localhost:3000/talker

##### Esperado

 O endpoint traz todos os talkers existentes. 

  ```json
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
  	  /* ....  */
     
 ```
    
#### Verbo Post : http://localhost:3000/login

##### Esperado

- O endpoint espera receber um body com o formato como no exemplo abaixo.

  ```json
    {
      "email": "email@email.com",
      "password": "123456"
    }
  ```
- O endpoint deverá retornar um código de status 200 com o token gerado e o seguinte corpo.
  
 ```json
    {
      "token": "7mqaVRXJSp886CGr"
    }
    
```


#### Verbo Post : http://localhost:3000/talker

##### Esperado

- O endpoint espera receber um body com o formato como no exemplo abaixo.

 ```json
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
    
    
- Caso searchTerm não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET /talker, com um status 200.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o status 200 e um array vazio.

#### Verbo Get : http://localhost:3000/talker/:id

##### Esperado

 - O endpoint espera receber um id que seja compatível com um id de um talker existente.

```json
       {
	 "name": "Henrique Albuquerque",
	 "age": 62,
	 "id": 1,
	 "talk": {
		   "watchedAt": "23/10/2020",
		   "rate": 5
	          }
        }
```
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
    
#### Verbo Put : http://localhost:3000/talker/:id

##### Esperado

- O endpoint espera receber um body no formato especifico e um id de um talker existente para editar os dados do talker selecionado.

 ```json
	{
	  "name": "Danielle Santos",
	  "age": 56,
	  "talk": {
	    "watchedAt": "22/10/2019",
	    "rate": 5
	  }
	}
```
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
    
#### Verbo Delete : http://localhost:3000/talker/:id

##### Esperado

- O endpoint espera receber um id de um talker cadastrado para ser deletado.

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

## Técnologias usadas

> Desenvolvido em nodejs.

> Framework utilizado: Express.

> Libs: nodemon, eslint, nodemon, express-rescue, crypto-js, body-parser

## Instalando Dependências

> Node
```bash
cd Talker-Manager/
npm install
``` 
> Docker
```
cd Talker-Manager/
npm install
docker-compose up -d
```
## Rodando a aplicação
```
cd Talker-Manager/
npm run dev
```

## Aviso Importante 
Caso queira roda a aplicação via docker deverá ter o docker instalado no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial 
