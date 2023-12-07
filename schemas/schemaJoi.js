const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const schemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { schema, schemaFavorite };