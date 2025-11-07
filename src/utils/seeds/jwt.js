const jwt = require("jsonwebtoken");

const generateToken =  { id } => {
     return jwt.token({ id }, process.env.JWT_SECRET, { expiresIn: "20d" });

}


const verifyJwt = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, verifyJwt};
