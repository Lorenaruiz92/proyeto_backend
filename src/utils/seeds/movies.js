const mongoose = require("mongoose");
const Movie = require("../../api/models/movies");

const lanzaSemilla = async () => {
    try {
        await mongoose.connect("mongodb+srv://lore92ruiz_db_user:DnMwG9m1yjpxKyc0@backend1.t8wsdcv.mongodb.net/?retryWrites=true&w=majority&appName=backend1");
        await Movie.collection.drop();
        console.log("Peliculas eliminadas");

        await Movie.insertMany(movies);
        console.log("Peliculas introducidas");

        await mongoose.disconnect();
        console.log("Desconectamos de la BBDD");

}
     catch (error) {
        console.log("error");
    }
}

lanzaSemilla();