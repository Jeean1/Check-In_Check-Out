const { Registration } = require("../models/registration.model");

const getAllRegistration = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createNewRegistration = async (req, res) => {
  const { entranceTime } = req.body;

  const newRegistration = await Registration.create({ entranceTime });

  res.status(200).json({
    status: "success",
    data: {
      newRegistration,
    },
  });
};

const getOnlyRegistre = async (req, res) => {
  try {
    const { registration } = req;

    res.status(200).json({
      status: "success",
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;

    const { registration } = req;

    await registration.update({ exitTime, status: "out" });

    res.status(200).json({
      status: "success",
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { registration } = req;

    await registration.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
      message: "Registration has been cancelled",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistration,
  createNewRegistration,
  updateRegistration,
  deleteRegistration,
  getOnlyRegistre,
};
