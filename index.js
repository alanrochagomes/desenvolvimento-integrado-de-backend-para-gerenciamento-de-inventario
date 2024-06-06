const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const dbUrl = "mongodb+srv://manager:NbFAJr30PXOGHkZu@cluster0.oheouec.mongodb.net";
const dbName = "gerenciamento-de-inventario";

async function main() {
  const client = new MongoClient(dbUrl);
  console.log("Conectando ao banco de dados...");
  await client.connect();
  console.log("Banco de dados conectado com sucesso!");

  const db = client.db(dbName)
  const collection = db.collection('inventario')

  const app = express();

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
  });

  const lista = ["Notebook", "Phone", "Tablet"];
  //              0           1        2

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

  app.use(express.json());

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
  app.put("/inventario/:id", function (req, res) {
    const id = req.params.id;

    if (!lista[id - 1]) {
      return res.status(404).send("Item não encontrado.");
    }

    const body = req.body;

    const novoItem = body.nome;

    if (!novoItem) {
      return res
        .status(400)
        .send("Corpo da requisição deve conter a propriedade `nome`.");
    }

    if (lista.includes(novoItem)) {
      return res.status(409).send("Esse item já existe na lista.");
    }

    lista[id - 1] = novoItem;

    res.send("Item atualizado com sucesso: " + id + " - " + novoItem);
  });

  // Endpoint Delete [DELETE] /inventario/:id
  app.delete("/inventario/:id", function (req, res) {
    const id = req.params.id;

    if (!lista[id - 1]) {
      return res.status(404).send("Item não encontrado.");
    }

    delete lista[id - 1];

    res.send("Item removido com sucesso: " + id);
  });

  app.listen(3000);
}

main();
