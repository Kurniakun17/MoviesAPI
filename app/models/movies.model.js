module.exports = mongoose => {
  const schema = mongoose.Schema({
    movie_name: String,
    release: Date,
    director: String,
    synopsis: String,
    score: Number,
  },
  {
    timestamps: true
  })

  schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;

    return object;
  })

  return mongoose.model("movies", schema);
}   