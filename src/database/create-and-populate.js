/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME_COMPLETO" varchar(40),
    "CPF" number,
    "TELEFONE" number,
    "SENHA" varchar(30),
    "EMAIL" varchar(30)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME_COMPLETO, CPF, TELEFONE, SENHA, EMAIL)
VALUES 
    (1, 'Carlos Alberto Albuquerque', '44213242190', '27969216379', '@12345679' , 'carlos.alb12@gmail.com'),
    (2, 'Olívia Ribeiro Ferreira', '91975838041', '35998195626', '@12345679' , 'olivia.rib1@outlook.com'),
    (3, 'Luiz Rodrigo Lima Mendes', '57014585045', '67988644718', '@12345679', 'luiz.rodrigo223@gmail.com'),
    (4, 'Mirtes Faria Lima', '37875791090', '83985817934', '@12345679', 'm.faria.l1@gmail.com'),
    (5, 'Rafael Monarca da Silva', '45655175070', '63991516460', '@12345679', 'rafa.monarca213@yahoo.com'),
    (6, 'Ana Carolina dos Santos Faria', '80690964030', '17981481645', '@12345679', 'carol.ana14@gmail.com'),
    (7, 'Lucas Rafael de Jesus', '25154112075', '96981677764', '@12345679', 'luca.rafa2@hotmail.com'),
    (8, 'Erika Ferreira Luz', '93735415016', '84987453778', '@12345679', 'erika.ferr221@gmail.com'),
    (9, 'Iago Malta Piteira', '19940979061', '47994722576', '@12345679', 'iago.malta22@outlook.com'),
    (10, 'Márcia Melo Resende', '94137767092', '67987741537', '@12345679', 'marcia.resende.melo@gmail.com')
`;

function criaTabelaClt() {
  db.run(CLIENTES_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de clientes");
  });
}

function populaTabelaClt() {
  db.run(ADD_CLIENTES_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de clientes");
  });
}

db.serialize(() => {
  criaTabelaClt();
  populaTabelaClt();
});
