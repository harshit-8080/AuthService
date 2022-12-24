const jwt = require("jsonwebtoken");
const {SECRETTOKEN} = require("../config/server.config");

const createToken = (email) => {

    try {
        const token = jwt.sign({
            data: email
          }, SECRETTOKEN, { expiresIn: 60 * 60 });
        return token;

    } catch (error) {
        console.log("this => ",error);
        throw error
    }
};

module.exports = {
    createToken
}
