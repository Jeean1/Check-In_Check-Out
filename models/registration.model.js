const { dataBase, DataTypes } = require("../utils/database.util");

const Registration = dataBase.define("registration", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  entranceTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "working",
  },
});

module.exports = { Registration };
