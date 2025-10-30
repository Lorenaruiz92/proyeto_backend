const { verifyJwt } = require("../utils/seeds/jwt");

const isAuth = async ( req, res, next ) => {
    try {
        const [, sign] = req.headers.authorization.split(" ");
        
        const { id } = verifyJwt (sign);
        const user = await User.findById(id);

        user.password = null;
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json("No estas autorizado");
    }
}

module.exports = { isAuth };