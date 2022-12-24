const express = require("express");
const userController = require("../controllers/user.controller");


const userRouter = express.Router();

userRouter.post("/users",userController.createUser);
userRouter.get("/users/:id",userController.getUser);

module.exports = userRouter;