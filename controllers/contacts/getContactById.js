const { Contact } = require("../../models/contact");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      const error = new Error("Not found contact");
      error.status = 404;
      throw error;
    }
    res.json({ status: "success", code: 200, data: { result: contact } });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;