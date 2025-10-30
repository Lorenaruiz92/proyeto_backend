const { generateToken } = require("../../utils/seeds/jwt");
const user = require ("../models/user");
const bcrypt = require ("bcrypt");

const register = async ( req, res, next) => {
    try {
        const user = new User(req.body);

        const userDuplicated = await User.findOne ({ email: req.body.email });

        if (userDuplicated){
            return res.status(400).json("este usuario ya existe");
        }

        const userSaved = await user.save();
        return res.status(201).json(userSaved);
    } catch (error) {
        return res.status(400).json("error");
    }
}

const login = async  ( req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if  (!user) {
            return res.estatus(400).json("Usuario o contraseña incorrecto");
        }
            if (bcrypt.compareSync(password, user.password));
            {
        const sign = generateToken(user._id);
        return res.status(200).json({ sign, user });
        } else {
            res.status(400).json("Usuario o contraseña incorrecto");
        }
    } catch (error) {
         res.status(400).json("error");
    }
}

const getUsers = async ( req, res, next ) =>  {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json("error");
    }
}

module.exports = { register, login, getUsers }