<<<<<<< HEAD
const { Contact, schemaFavorite } = require("../../models/contact");
=======
const Contact = require("../../models/contact");
const { schemaFavorite } = require("../../schemas/schemaJoi");
>>>>>>> f897728d66c7cfeaa230c21584b96a891cbf5b99

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const { error } = schemaFavorite.validate(body);
  if (error) {
    error.message = "missing field favorite";
    error.status = 400;
    throw error;
  }
  const updatedContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!updatedContact) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    status: "updated success",
    data: {
      result: updatedContact,
    },
  });
};

module.exports = updateFavorite;