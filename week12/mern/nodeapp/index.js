const express = require("express");
//const path = require("path");
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || "3000";

const dbUrl = "<YOUR_DB_URL>"
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

//API endpoints

/*
 * returns: an array of menu links
 */
app.get("/api/menu", async (request, response) => {
  let links = await getLinks(); //JSON array of documents in the menuLinks collection
  response.json(links); //send JSON object with appropriate JSON headers
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
module.exports = app;

//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("testdb"); //select testdb database
  return db;
}
/* Async function to retrieve all links documents from menuLinks collection. */
async function getLinks() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("menuLinks").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}