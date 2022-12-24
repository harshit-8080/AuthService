const { User } = require("../models/index");

exports.createUser= async (user) => {

  try {
    const result = await User.create(user);
    return result;

  } catch (error) {

    throw error;
  }
};

exports.getUser = async (userId) => {

  try {
    const result = await User.findByPk(userId,{
      attributes:["id","name","email"]
    });
    if(result){
      return result;
    }else{
      throw "userId not valid";
    }

  } catch (error) {
      throw error;
  }
}
