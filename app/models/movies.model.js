module.exports = mongoose => {
  const schema = mongoose.Schema({
    movie_name: String,
    release_date: Date,
    director: String,
    synopsis: String,
    score: Number,
  },
  {
    timestamps: true
  })

  return mongoose.model("movies", schema)
}