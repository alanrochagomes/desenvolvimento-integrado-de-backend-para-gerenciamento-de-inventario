require('dotenv').config()
const express = require("express");
const { connectToDatabase } = require('./db/database-connection');
// const { MongoClient, ObjectId } = require("mongodb");

async function main() {

  await connectToDatabase()
  
  // const collection = db.collection('inventario')

  const app = express();

  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
  });

/*
  // Endpoint Read All [GET] /inventario
  app.get("/inventario", async function (req, res) {

    const itens = await collection.find().toArray()

    res.send(itens)
  });

  // Endpoint Read By Id [GET] /inventario/:id
  app.get("/inventario/:id", async function (req, res) {

    const id = req.params.id;

    const item = await collection.findOne({ _id: new ObjectId(id) });

    if (!item) {
      return res.status(404).send("Item não encontrado.");
    }

    res.send(item);
  });



  // Endpoint Create [POST] /inventario
  app.post("/inventario", async function (req, res) {

    const novoItem = req.body;


    if (!novoItem || !novoItem.nome) {
      return res
        .status(400)
        .send("Corpo da requisição deve conter a propriedade `nome`.");
    }

    // if (lista.includes(novoItem)) {
    //   return res.status(409).send("Item já existe na lista.");
    // }

    await collection.insertOne(novoItem)

    res.status(201).send(novoItem);
  });

  // Endpoint Update [PUT] /inventario
  app.put("/inventario/:id", async function (req, res) {

    const id = req.params.id;

    // if (!lista[id - 1]) {
    //   return res.status(404).send("Item não encontrado.");
    // }

    const novoItem = req.body;

    if (!novoItem || !novoItem.nome) {
      return res
        .status(400)
        .send("Corpo da requisição deve conter a propriedade `nome`.");
    }

    // if (lista.includes(novoItem)) {
    //   return res.status(409).send("Esse item já existe na lista.");
    // }

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: novoItem }
    )

    res.send(novoItem);
  });

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
