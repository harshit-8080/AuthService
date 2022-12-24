const express = require("express");
const bodyParsar = require("body-parser");
const {PORT} = require("./src/config/server.config.js");
const userRouter = require("./src/routes/user.routes.js");
const db = require("./src/models/index");

const setupAndStartServer = async () => {
  const app = express();

  //middleware for app
  app.use(bodyParsar.json());
  app.use(bodyParsar.urlencoded({extended:true}));
  app.use(userRouter);
  
  // db.sequelize.sync();

  app.listen(PORT, (req, res) => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
