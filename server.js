const express = require('express')
const cors = require('cors')
const db = require('./app/models')
const app = express();

const corsConfig = {
  origin: "*"
}

// middleware
app.use(cors(corsConfig))
app.use(express.json())

// connect to database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
  .then(()=>console.log("connected to database"))
  .catch((err)=>{
    console.log(`failed to connect, ${err}`);
    process.exit();
})

// routes
require("./app/routes/movies.routes")(app);

const PORT = process.env.PORT || 3000;
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
app.listen(PORT, HOST,() => console.log(`Server is running on ${PORT}, HOST : ${HOST}`))  