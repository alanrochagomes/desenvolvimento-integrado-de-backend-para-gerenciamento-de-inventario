require('dotenv').config()
const express = require("express");
const { connectToDatabase } = require('./db/database-connection');
const inventarioRouter = require('./inventario/inventario.router')
// const { MongoClient, ObjectId } = require("mongodb");

async function main() {

  await connectToDatabase()
  
  // const collection = db.collection('inventario')

  const app = express();

  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.use('/inventario', inventarioRouter)

/*
  
  // Endpoint Delete [DELETE] /inventario/:id
  app.delete("/inventario/:id", async function (req, res) {

    const id = req.params.id;

    // if (!lista[id - 1]) {
    //   return res.status(404).send("Item não encontrado.");
    // }

    await collection.deleteOne({ _id: new ObjectId(id) })

    res.send("Item removido com sucesso: " + id);
  });
*/

  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  });
}

main();
