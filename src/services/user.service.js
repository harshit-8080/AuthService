const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const {createToken} = require("../utils/tokenHelper");
const jwt = require("jsonwebtoken");
const {SECRETTOKEN} = require("../config/server.config");

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

exports.signIn = async (user) => {

  try {
    const checkUser = await User.findOne({
      where:{
        email:user.email
      }
    })

    if(!checkUser){
      return "Email Invalid"
    }else{
      const checkPassword = bcrypt.compareSync(user.password,checkUser.password);
      if(checkPassword){
        const token = createToken(user.email);
        return {token:token};
      }else{
        return "Password incorrect"
      }
    }

  } catch (error) {
      throw error;
  }

}

exports.isAuthenticate = async (token) => {

  try {

    const response = jwt.verify(token,SECRETTOKEN);
    if(response){

        const user = await User.findOne({
          where:{
            email:response.email
          }
        })
        if(!user){
          throw {error:"invalid token"}
        }else{
          return user;
        }
    }
    else{
      throw {error:"invalid token"}
    }

  } catch (error) {
      throw error;
  }

}