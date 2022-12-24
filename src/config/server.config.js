require("dotenv").config();
const bcrypt = require('bcrypt');

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(Number(process.env.SALTROUNDS));


module.exports = {
  PORT,
  SALT
};
