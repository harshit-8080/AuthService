'use strict';
const bcrypt = require('bcrypt');
const {SALT} = require("../config/server.config");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role,{
        through:"User_Roles"
      })
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[5,20]
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
    const hashPassword = bcrypt.hashSync(user.password,SALT);
    user.password = hashPassword;
  })
  
  return User;
};