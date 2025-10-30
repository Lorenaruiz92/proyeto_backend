const { getCinemas, postCinema, updateCinema, deleteCinema } = require("../controllers/movies");

const cinemaRouter = require("express").Router();

cinemaRouter.get("/", getCinemas);
cinemaRouter.post("/", postCinema);
cinemaRouter.put("/:id", updateCinema)
cinemaRouter.delete("/:id", deleteCinema)

module.exports = cinemaRouter;
