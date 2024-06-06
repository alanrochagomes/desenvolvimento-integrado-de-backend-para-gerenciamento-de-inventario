const Joi = require('joi')

const inventario = Joi.object({
    nome: Joi.string()
    .min(3)
    .max(30)
    .required(),

    imagem: Joi.string()
     .uri()
     .required(),

     Preço: Joi.string()
      .min(3)
      .max(30)
      .optional()
})

module.exports = inventario
