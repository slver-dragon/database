require("dotenv").config();
const app = require("./delivery/index.js");
const PORT = process.env.PORT || 5000;
const sequelize = require("./db.js");

const main = async () => {
  
  try {
    await sequelize.authenticate;
    await sequelize.sync;
    await app.listen(PORT, () => {
      console.log(`This app listening at http://localhost:${PORT}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
