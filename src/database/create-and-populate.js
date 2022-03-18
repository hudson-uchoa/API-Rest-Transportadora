/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
import { dirname } from'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME_COMPLETO" varchar(40),
    "CPF" number,
    "TELEFONE" number,
    "EMAIL" varchar(30),
    "PEDIDOS_ID" int
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME_COMPLETO, CPF, TELEFONE, EMAIL, PEDIDOS_ID)
VALUES 
    (1, 'Carlos Alberto Albuquerque', '44213242190', '27969216379', 'carlos.alb12@gmail.com', 1),
    (2, 'Olívia Ribeiro Ferreira', '91975838041', '35998195626', 'olivia.rib1@outlook.com', 2),
    (3, 'Luiz Rodrigo Lima Mendes', '57014585045', '67988644718', 'luiz.rodrigo223@gmail.com', 3),
    (4, 'Mirtes Faria Lima', '37875791090', '83985817934', 'm.faria.l1@gmail.com', 4),
    (5, 'Rafael Monarca da Silva', '45655175070', '63991516460', 'rafa.monarca213@yahoo.com', 5),
    (6, 'Ana Carolina dos Santos Faria', '80690964030', '17981481645', 'carol.ana14@gmail.com', 6),
    (7, 'Lucas Rafael de Jesus', '25154112075', '96981677764', 'luca.rafa2@hotmail.com', 7),
    (8, 'Erika Ferreira Luz', '93735415016', '84987453778', 'erika.ferr221@gmail.com', 8),
    (9, 'Iago Malta Piteira', '19940979061', '47994722576', 'iago.malta22@outlook.com', 9),
    (10, 'Márcia Melo Resende', '94137767092', '67987741537', 'marcia.resende.melo@gmail.com', 10)
`

function criaTabelaClt() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de clientes");
    });
}


function populaTabelaClt() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes");
    });
}


db.serialize( ()=> {
    criaTabelaClt();
    populaTabelaClt();
});