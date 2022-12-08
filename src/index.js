const app = require("./app");
const db = require("./db");

const port = 3001;

const server = async () => {
  try {
    await db();
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

server()