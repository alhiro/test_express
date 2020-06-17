module.exports = app => {
  const movies = require("../controllers/movies.controller.js");

  var router = require("express").Router();

  // Create a new Movies
  router.post("/", movies.create);

  // Retrieve all Movies
  router.get("/", movies.findAll);

  // Retrieve a single Movie with id
  router.get("/:id", movies.findOne);

  // Retrieve all published Movies
  router.get("/published", movies.findAllPublished);

  // Update a Movie with id
  router.put("/:id", movies.update);

  // Delete a Movie with id
  router.delete("/:id", movies.delete);

  // Detele all Movie
  router.delete("/", movies.deleteAll);

  app.use('/api/movies', router);
};
