const { app } = require("./app");
const { dataBase } = require("./utils/database.util");

const startServer = async () => {
  try {
    await dataBase.authenticate();

    await dataBase.sync();

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log("Express App Running!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
