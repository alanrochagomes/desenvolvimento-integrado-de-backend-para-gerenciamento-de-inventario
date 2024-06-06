const { MongoClient } = require("mongodb");

const dbUrl = process.env.DATABASE_URL
const dbName = "gerenciamento-de-inventario";

async function connectToDatabase() {

    const client = new MongoClient(dbUrl);
    console.log("Conectando ao banco de dados...");
    await client.connect();
    console.log("Banco de dados conectado com sucesso!");

    const db = client.db(dbName)
}

module.exports = {
    connectToDatabase
}