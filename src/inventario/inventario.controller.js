const service = require('./inventario.service')

async function readAll(req, res) {
    const items = await service.readAll()

    res.send(items)
}

async function readById(req, res) {

    const id = req.params.id;

    const item = await service.readById(id)

    if (!item) {
        return res.status(404).send("Item não encontrado.");
      }

    res.send(item)
}

async function create(req, res) {

    const newItem = req.body;

    if (!newItem || !newItem.nome) {
        return res
          .status(400)
          .send("Corpo da requisição deve conter a propriedade `nome`.");
      }

      await service.create(newItem)

      res.status(201).send(newItem);
}

function updateById(req, res) {
    res.send('Update By Id')
}

function deleteById(req, res) {
    res.send('Delete By Id')
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}