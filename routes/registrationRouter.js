const express = require("express");
const {
  getAllRegistration,
  createNewRegistration,
  updateRegistration,
  deleteRegistration,
  getOnlyRegistre,
} = require("../controllers/registrations.controller");
const { validateId } = require("../middleware/validateId.middleware");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistration);

registrationRouter.get("/:id", validateId, getOnlyRegistre);

registrationRouter.post("/", createNewRegistration);

registrationRouter.patch("/:id", validateId, updateRegistration);

registrationRouter.delete("/:id", validateId, deleteRegistration);

module.exports = { registrationRouter };
