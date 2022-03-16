import sqlite3 from 'sqlite3'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


//Processamento de sinal
process.on('SIGINT', () =>
    db.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export default db