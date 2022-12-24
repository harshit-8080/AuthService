const userService = require("../services/user.service");

const signUp = async (req, res) => {
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

const getUser = async (req, res) => {
  try {

    const userId = req.params.id;
    const response = await userService.getUser(userId);

    return res.status(201).json({
      sucess: true,
      msg: "user fetched successfully",
      response: response,
      err: {},
    });


  } catch (error) {
    console.log(error);

    return res.status(500).json({
      sucess: false,
      msg: "internal server error",
      response: "error",
      err: { error },
    });

  }
};

const signIn = async (req, res) =>{
  try {

    const user = {
      email:req.body.email,
      password:req.body.password
    }

    const response = await userService.signIn(user);

    return res.status(201).json({
      sucess: true,
      msg: "no error",
      response: response,
      err: {},
    });


  } catch (error) {
    console.log(error);

    return res.status(500).json({
      sucess: false,
      msg: "internal server error",
      response: "error",
      err: { error },
    });

  }
}

module.exports = {
    signUp,
    getUser,
    signIn
}