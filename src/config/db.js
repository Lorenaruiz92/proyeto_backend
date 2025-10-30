
const mongoose = require("mongoose");

const connectDB = async () => {
try {
    console.log("Se conectó con exito ")
} catch (error) {
    console.log("Fallo en la conexión con la BBDD ")
}
}

module.exports = { connectDB }

