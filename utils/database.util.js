const { Sequelize, DataTypes } = require("sequelize");

const dataBase = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "j2080",
  port: 5432,
  database: "check-IN-check-Out",
  logging: false
});

module.exports = { dataBase, DataTypes };
