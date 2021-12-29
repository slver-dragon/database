const app = require("./delivery/index.js");
const port = process.env.port || 4000;

const main = async () => {
  await app.listen(port, () => {
    console.log(`This app listening at http://localhost:${port}`);
  });
};

main();