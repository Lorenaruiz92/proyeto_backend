require("dotenv").config();
const express = require('express');
const { connectDB } = require("./src/config/db");
const moviesRouter = require("./src/api/routes/movies");
const cinemaRouter = require("./src/api/routes/cinema");
const { connectCloudinary } = require("./src/config/cloudinary");

const app = express();

app.use(express.json());

connectDB();
connectCloudinary();

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/cinemas", cinemaRouter);


app.use('/saludar', (req, res) => {
  return res.status(200).json("Hola");

})

app.use("*", (req, res, next) => {
    return res.status(404).json("Route Not Found")
})
app.listen(3003, () => {
    console.log("servidor levantado en: http: //localhost:3003")
})