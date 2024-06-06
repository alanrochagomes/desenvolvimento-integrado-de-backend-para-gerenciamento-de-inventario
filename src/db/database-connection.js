const { MongoClient } = require("mongodb");

const dbUrl = process.env.DATABASE_URL
const dbName = "gerenciamento-de-inventario";

const client = new MongoClient(dbUrl);

async function connectToDatabase() {
    console.log("Conectando ao banco de dados...");
    await client.connect();
    console.log("Banco de dados conectado com sucesso!");
}

function getDatabase() {
    return client.db(dbName)
}

module.exports = {
    connectToDatabase,
    getDatabase
}