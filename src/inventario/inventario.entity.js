const Joi = require('joi')

const inventario = Joi.object({
    nome: Joi.string()
    .min(3)
    .max(30)
    .required(),
})

module.exports = inventario
