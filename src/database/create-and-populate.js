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
    "CPF" varchar(11),
    "TELEFONE" varchar(30),
    "SENHA" varchar(30),
    "EMAIL" varchar(30)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME_COMPLETO, CPF, TELEFONE, SENHA, EMAIL)
VALUES 
    (1, 'Carlos Alberto Albuquerque', '44213242190', '27969216379', '@12345679' , 'carlos.alb12@gmail.com'),
    (2, 'Olívia Ribeiro Ferreira', '91975838041', '35998195626', '@12345679' , 'olivia.rib1@outlook.com'),
    (3, 'Luiz Rodrigo Lima Mendes', '57014585045', '67988644718', '@12345679', 'luiz.rodrigo223@gmail.com')
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
