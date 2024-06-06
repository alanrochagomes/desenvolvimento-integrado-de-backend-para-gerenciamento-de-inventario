const express = require("express");

const router = express.Router()

function teste(req, res) {
    res.send('OK')
}

router.get('/', teste)
router.get('/:id', teste)
router.post('/', teste)
router.put('/:id', teste)
router.delete('/:id', teste)

module.exports = router