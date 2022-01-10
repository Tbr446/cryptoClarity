const { Router } = require("express");
const email = require("../model/Email");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newEmail = new email.model(request.body);
  newEmail.save((err, email) => {
    return err ? response.sendStatus(500).json(err) : response.json(email);
  });
});

router.get("/", (request, response) => {
  email.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

module.exports = router;
