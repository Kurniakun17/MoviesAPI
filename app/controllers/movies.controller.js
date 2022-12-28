const db = require("../models")
const Movies = db.movies

exports.findall = (req, res) => {
  Movies.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.create = (req, res) => {
  req.body.release = new Date(req.body.release)

  Movies.create(req.body)
    .then(() => res.send({message: "Data berhasil disimpan"}))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.show = (req, res) => {
  const id = req.params.id;

  Movies.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res) => {
  const id = req.params.id;
  
  Movies.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({message: "Not Found!"})
      }
      res.send({message: "Data berhasil diupdate"})
    })
    .catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Movies.findByIdAndRemove(id)
    .then(data => {
      if(!data){
        res.status(404).send({message: "Not Found!"})
      }
      res.send({message: "Data berhasil dihapus"})
    })
    .catch(err => res.status(500).send({message: err.message}))
}