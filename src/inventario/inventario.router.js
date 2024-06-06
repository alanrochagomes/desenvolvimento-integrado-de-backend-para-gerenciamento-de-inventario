const express = require("express");
const { readAll, readById, create, updateById, deleteById } = require("./inventario.controller");

const router = express.Router()

function teste(req, res) {
    res.send('OK')
}

router.get('/', readAll)
router.get('/:id', readById)
router.post('/', create)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

module.exports = router