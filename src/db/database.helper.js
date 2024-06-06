const { ObjectId } = require("mongodb");

function validateObjectId(req, res, next) {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send({ error: "ObjectId inválido" });
  }

  next();
}

module.exports = {
  validateObjectId,
};
