const express = require("express");
const {PORT} = require("./src/config/server.config.js");

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, (req, res) => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
