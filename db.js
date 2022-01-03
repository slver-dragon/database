require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  (DB_NAME = process.env.DB_NAME),
  (DB_USER = process.env.DB_USER),
  (DB_PASSWORD = process.env.DB_PASSWORD),

  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      timestamps: false,
    },
  }
);

const product = sequelize.define("product", {
  uuid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fabricator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
