 const { getDatabase } = require("../db/database-connection")

function getCollection() {
    return getDatabase().collection('inventario')
}

function readAll() {
    return getCollection().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}

function deleteById() {
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}