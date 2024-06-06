require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./db/database-connection");

const inventarioRouter = require("./inventario/inventario.router");

async function main() {
  await connectToDatabase();

  const app = express();

  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.use("/inventario", inventarioRouter);

  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
  });
}

main();
