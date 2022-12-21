module.exports = app => {
  const movies = require("../controllers/movies.controller")
  const router = require("express").Router()

  router.get("/", movies.findall)
  router.get("/:id", movies.show)
  router.post("/", movies.create)
  router.put("/:id", movies.update)
  router.delete("/:id", movies.delete)

  app.use("/movies", router)
}