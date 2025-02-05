const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const PetSchema = new mongoose.Schema({
  name: String,
  type: String,
  breed: String,
  age: Number
}); //, {collection: "pets"});
const Pet = mongoose.model("Pet", PetSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all pets from the pets collection
async function getPets() {
  await connect();
  return await Pet.find({}); //return array for find all
}


// initialize the pets collection with some initial data
async function initializePets(){
  const petList = [
    {
      name: "Mittens",
      type: "cat",
      breed: "Maine Coon",
      age: 4
    },
    {
      name: "Fred",
      type: "Dog",
      breed: "Lahsa",
      age: 8
    }
  ];
  await Pet.insertMany(petList);
}

async function addPet(petName, petType, petBreed, petAge){
  const newPet = new Pet({
    name: petName,
    type: petType,
    breed: petBreed,
    age: petAge
  });
  let response = await newPet.save(); // save to thge db collection (pets)
  console.log(response);
}

async function updatePetName(oldName, newName){
  let  result = await Pet.updateOne(
    {name: oldName},
    {name: newName})
};

async function deletePetByName(petName){
  let  result = await Pet.deleteOne(
    {name: petName})
};

module.exports = {
  getPets,
  initializePets,
  addPet,
  updatePetName,
  deletePetByName
}