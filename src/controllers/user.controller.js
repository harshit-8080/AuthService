const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    
    const user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }

    const response = await userService.createUser(user);

    return res.status(201).json({
        "sucess":true,
        "msg":"user created successfully",
        "response":response,
        "err":{}
    })
  } catch (error) {

    console.log(error);

    return res.status(500).json({
        "sucess":false,
        "msg":"internal server error",
        "response":"error",
        "err":{error}
    })

  }
};


module.exports = {
    createUser,
}