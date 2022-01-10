const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  name: String,
  emailAddress: String
});

const Email = mongoose.model("Email", emailSchema);

module.exports = {
  schema: emailSchema,
  model: Email
};
