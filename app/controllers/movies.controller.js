const db = require("../models")
const Movies = db.movies

exports.findall = (req, res) => {
  res.json({message:"Hai, success"})
}

exports.create = (req, res) => {
  Movies.body.release_date = new Date(Movies.release_date)

  Movies.create(req.body)
  .then(() => res.send({message: "Data berhasil disimpan"}))
  .catch(err => res.status(500).send({message: err}))
}

exports.show = (req, res) => {
  
}

exports.delete = (req, res) => {
  
}

exports.update = (req, res) => {

}
