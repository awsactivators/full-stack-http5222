const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String
}); //, {collection: "pets"});
const Movie = mongoose.model("Movie", MovieSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all pets from the pets collection
async function getMovies() {
  await connect();
  return await Movie.find({}); //return array for find all
}


// initialize the pets collection with some initial data
async function initializeMovie(){
  const movieList = [
    {
      title: "The Originals",
      year: 2017,
      rating: "18+"
    },
    {
      title: "Blacklist",
      year: 2008,
      rating: "18+"
    },
    {
      title: "Young Sheldon",
      year: 2020,
      rating: "G"
    },
    {
      title: "High School Musical",
      year: 2003,
      rating: "PG"
    },
    {
      title: "Wednesday",
      year: 2021,
      rating: "PG"
    },
    {
      title: "Wicked",
      year: 2024,
      rating: "G"
    }
  ];
  await Movie.insertMany(movieList);
}


async function updateMovieRating(title, newRating){
  let  result = await Movie.updateOne(
    {title: title},
    {rating: newRating})
};

async function deleteMoviesByRating(rating){
  let  result = await Movie.deleteMany(
    {rating: rating})
};

module.exports = {
  getMovies,
  initializeMovie,
  updateMovieRating,
  deleteMoviesByRating
}