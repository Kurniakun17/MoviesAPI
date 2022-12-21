module.exports = app => {
  const movies = require("../controllers/movies.controller")
  const router = require("express").Router()

  router.get("/", movies.findall)
  router.get("/:id", movies.show)
  router.post("/", movies.create)
  router.put("/", movies.update)
  router.delete("/", movies.delete)

  app.use("/movies", router)
}