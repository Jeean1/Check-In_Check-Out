const { Registration } = require("../models/registration.model");

const validateId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    req.registration = registration;

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "error",
      message: "Only ID type number",
    });
  }
};

module.exports = { validateId };
