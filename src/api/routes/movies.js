const upload = require("../../middlewares/file");
const { getMovies, postMovies, updateMovies, deleteMovies } = require("../controllers/movies");

const moviesRouter = require("express").Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", upload.single("img"), postMovies);
moviesRouter.put("/:id", updateMovies)
moviesRouter.delete("/:id", deleteMovies)

module.exports = moviesRouter;
  

