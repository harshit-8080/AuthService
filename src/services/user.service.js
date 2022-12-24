const { User } = require("../models/index");

exports.createUser= async (user) => {

  try {
    const result = await User.create(user);
    return result;

  } catch (error) {

    throw error;
  }
};
