API REST TRANSPORTADORA

Projeto de Final de Módulo do curso de Web Dev Full Stack da Resilia Educação referente ao Módulo 04.

Projeto realizado utilizando o Node.js com framework Express.

Objetivo
Esse projeto tem como objetivo criar uma API RESTful de uma Transportadora, onde será possível aplicar as operações CRUD na entidade Cliente.

Pré-Requisitos
Node.js v.16.14.0
NPM v.8.3.1
Pacotes utilizados
Express v.4.17.3
Nodemon v.2.0.15
SQLite v.5.0.0
Instalação da Aplicação
Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

git clone https://github.com/Hudson-Uchoa/API-Rest-Transportadora.git
Entrando na pasta:

cd API-Rest-Transportadora
Instalando os pacotes:

npm install
Criando o banco de dados:

npm run database
Iniciando o servidor:

npm start
Rotas implementadas
Usuário
GET /usuario

Schema da resposta

{
    usuarios: [
        {
            "nome" : <String>,
            "usuario: <String>,
            "senha" : <String>
        }
    ],
    erro: <Boleano>

}
GET /usuario/email/{email}

Schema da resposta

{
    usuarios: [
        {
            "nome" : <String>,
            "usuario: <String>,
            "senha" : <String>
        }
    ],
    erro: <Boleano>

}
POST /usuario

Schema da requisição

{
    "nome" : <String>,
    "usuario: <String>,
    "senha" : <String>
}
Schema da resposta

{   
    mensagem: <String>
    usuario: {
        "nome" : <String>,
        "usuario: <String>,
        "senha" : <String>
    },
    erro: <Boleano>
}
PUT /usuario/id/{id}

Schema da requisição

{
    "nome" : <String>,
    "usuario: <String>,
    "senha" : <String>
}
Schema da resposta

{   
    mensagem: <String>
    usuario: {
        "nome" : <String>,
        "usuario: <String>,
        "senha" : <String>
    },
    erro: <Boleano>
}
DELETE /usuario/id/{id}

Schema da resposta

{   
    mensagem: <String>
    erro: <Boleano>
}
Tarefa
GET /tarefa

Schema da resposta

{
    tarefas: [
        {
            "titulo" : <String>,
            "descricao: <String>,
            "status" : <String>
            "dataCriação" : <String>,
            "idUsuario" : <Int>
        }
    ],
    erro: <Boleano>

}
GET /tarefa/titulo/{titulo}

Schema da resposta

{
    tarefas: [
        {
            "titulo" : <String>,
            "descricao: <String>,
            "status" : <String>
            "dataCriação" : <String>,
            "idUsuario" : <Int>
        }
    ],
    erro: <Boleano>

}
POST /tarefa

Schema da requisição

{
    "titulo" : <String>,
    "descricao: <String>,
    "status" : #{"Fazendo", "A fazer", "Feito"},
    "idUsuario" : <Int>
}
Schema da resposta

{
    mensagem: <String>
    tarefa: {
        "titulo" : <String>,
        "descricao: <String>,
        "status" : <String>
        "dataCriação" : <String>,
        "idUsuario" : <Int>
    },
    erro: <Boleano>
}
PUT /tarefa/id/{id}

Schema da requisição

{
    "titulo" : <String>,
    "descricao: <String>,
    "status" : #{"Fazendo", "A fazer", "Feito"},
    "idUsuario" : <Int>
}
Schema da resposta

{
    mensagem: <String>
    tarefa: {
        "titulo" : <String>,
        "descricao: <String>,
        "status" : <String>
        "dataCriação" : <String>,
        "idUsuario" : <Int>
    },
    erro: <Boleano>
}
DELETE /tarefa/id/{id}

Schema da resposta

{
    mensagem: <String>
    erro: <Boleano>
}
Rodando teste
Para rodar os teste, utilizando o framework Jest e o Supertest basta rodar o comando abaixo:

npm test
Sobre as branches
Com o objetivo de manter o histórico da evolução do projeto de fácil acesso, cada branch desse repositório irá representar o estado do projeto ao final da aula.
