# 🚚 API Transportadora

 <p align="justify">Projeto de encerramento do módulo 4 da Resilia Educação. O objetivo é desenvolver uma API Rest de uma transportadora.

---

## 📘 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.1.2
- <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0
- <a href="https://nodemon.io/">Nodemon</a> - v. 2.0.15

---

## 📖 Iniciando da aplicação

 <p>Rode os comandos a seguir no terminal ou PoweShell.</p>
 
 - Clone o repositório:
```
git clone https://github.com/Hudson-Uchoa/API-Rest-Transportadora.git
```
- Acesse a pasta:
```
cd API-Rest-Transportadora
```
- Instale os pacotes necessários:
```
npm install
```
- Popule o banco de dados:
```
npm run database
```
- Inicie o servidor:
```
npm run start
```
<p>Ao iniciar o projeto, o servidor será aberto em http://localhost:3000/, sendo 3000 a porta padrão. Caso necessário, a porta poderá ser alterada no arquivo server.js</p>

---

## 📦 Rotas HTTP

### <b> GET /cliente </b>

Lista todos os clientes da base de dados.
Exemplo da resposta esperada:

```
{
    "clientes": [
        {
            "ID": 1,
            "NOME_COMPLETO": "Carlos Alberto Albuquerque",
            "CPF": 44213242190,
            "TELEFONE": 27969216379,
            "EMAIL": "carlos.alb12@gmail.com",
            "PEDIDOS_ID": 1
        },
        {
            "ID": 2,
            "NOME_COMPLETO": "Olívia Ribeiro Ferreira",
            "CPF": 91975838041,
            "TELEFONE": 35998195626,
            "EMAIL": "olivia.rib1@outlook.com",
            "PEDIDOS_ID": 2
        }

}

```

### <b> GET /cliente/id/{id} </b>

Retorna o usuario de acordo com o id. Campo ":id" deverá ser substituído pelo id do usuario escolhido.
Exemplo da resposta esperada:

```
{
    "usuario": {
        "ID": 10,
        "NOME_COMPLETO": "Márcia Melo Resende",
        "CPF": 94137767092,
        "TELEFONE": 67987741537,
        "EMAIL": "marcia.resende.melo@gmail.com",
        "PEDIDOS_ID": 10
    },
    "erro": false
}
```

### <b> POST /cliente </b>

Insere um novo cliente na base de dados.

Exemplo da resposta esperada:

```
{
    "mensagem": "Cliente Bruno Souza inserido com sucesso!",
    "cliente": {
        "nome_completo": "Bruno Souza",
        "cpf": 24116942190,
        "telefone": 21988322903,
        "email": "bruno.souza23@gmail.com",
        "pedidos_id": 111
    },
    "erro": false
}
```

### <b> PUT /cliente/id/{id} </b>

Atualiza um cliente na base de dados. Campo ":id" deverá ser substituído pelo id do cliente a ser atualizado.

Exemplo da resposta esperada:

```
{
    "mensagem": "Cliente de id 11 atualizado com sucesso",
    "cliente": {
        "nome_completo": "Hudson Lima",
        "cpf": 54116942190,
        "telefone": 21988785903,
        "email": "ronaldo.lima2@gmail.com",
        "pedidos_id": 300
    },
    "erro": false
}
```

### <b> DELETE /cliente/id/{id} </b>

Deleta o cliente escolhido da base de dados.
Exemplo da resposta esperada:

```
{
    "cliente": "Cliente de id 11 deletado com sucesso!",
    "erro": false
}
```

---

---

## 🚛 Desenvolvido por

<b>Hudson Lima Uchoa 👨‍💻</b>

<p>Estudante de Desenvolvimento Web Full Stack.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-da-cunha-vidal-2560a520a/)](https://www.linkedin.com/in/hudson-lima-uchoa/)