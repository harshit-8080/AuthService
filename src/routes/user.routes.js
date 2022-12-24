const express = require("express");
const userController = require("../controllers/user.controller");


const userRouter = express.Router();

userRouter.post("/signup", userController.signUp);

userRouter.get("/users/:id", userController.getUser);

userRouter.post("/signin", userController.signIn);

userRouter.get("/authenticate", userController.isAuthenticate);

userRouter.post("/role", userController.addRole);

userRouter.get("/roles", userController.roleDetails);

module.exports = userRouter;