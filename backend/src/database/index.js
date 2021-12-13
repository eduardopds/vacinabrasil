const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "vacinabrasil",
  "root",
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_URL,
    dialect: "mysql",
    port: process.env.BD_PORT,
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log("OK");
  })
  .catch(function (erro) {
    console.log("Falha:" + erro);
  });
module.exports = sequelize;
