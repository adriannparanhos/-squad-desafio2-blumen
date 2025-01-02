import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function connectDatabase(): Promise<void> { // Informar que a função retorna uma Promise
    try {
        const db = await open({
            filename: '..\\..\\database\\plantas.db',
            driver: sqlite3.Database as any,
        });

        console.log('Conexão com o banco de dados estabelecida');

        // Executar a consulta SQL
        const sql = 'SELECT * FROM plantas';
        const plantas = await db.all(sql);

        console.log('Resultado da consulta:', plantas);

        // Não esqueça de fechar a conexão!
        await db.close();
        console.log('Conexão com o banco de dados fechada');
    } catch (error) {
        console.error('Erro ao conectar ou consultar o banco de dados:', error);
    }
}

// Manipular a Promise retornada
connectDatabase()
    .then(() => console.log('Operação no banco de dados foi concluída'))
    .catch((error) => console.error('Erro inesperado:', error));

console.log('Hello, TypeScript!');
console.log('Teste de integração bem-sucedido' );