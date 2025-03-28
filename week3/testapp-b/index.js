//IMPORT REQUIRED MODULES
const express = require("express");
const path = require("path"); //contains methods to help with path concatenation
const { MongoClient, ObjectId } = require("mongodb"); // import mongoclient from mongodb

// connect to db
const dbUrl = "mongodb://127.0.0.1:27017/http_5222_w2"; // connection string to connect to localhost db and select the testdb database
const client = new MongoClient(dbUrl);

//SET UP EXPRESS APP
const app = express(); //express() is a function to initialize an Express app
const port = process.env.PORT || "8885";

//SET UP TEMPLATE ENGINE
app.set("views", path.join(__dirname, "views")); //set "views" to use the <app_directory>/templates folder to store template files
app.set("view engine", "pug");//set Express to use Pug as the template (view) engine

//SET UP FOLDER FOR STATIC FILES (CSS, client-side JS)
app.use(express.static(path.join(__dirname, "public")));

// extend the urlencoded format (i.e query string format like weight=0&path=/&name=Home)
app.use(express.urlencoded({extend: true}));
app.use(express.json()); // allow for form data retrival as json {weight: 0, path: "/", name: "Home"}

//TEST APP PATH
app.get("/", async (request, response) => {
  //response.status(200).send("Test");
  let links =  await getLinks();
  response.render("index", { title: "Home", menu: links });
});

app.get("/about", async (request, response) => {
  let links =  await getLinks();
  response.render("about", { title: "About", menu: links });
})

//Admin page
app.get("/admin/menu", async (request, response) => {
  let links =  await getLinks();
  // render admin page
  response.render("menu-list", { title: "Menu links admin", menu: links });
}) 

// Admin add new link
app.get("/admin/menu/add", async (request, response) => {
  let links = await getLinks();
  response.render("add-link", {title: "Add New Link", menu: links });
})

// submit the form to mongo db using post
app.post("/admin/menu/add/submit", async (request, response) => {
  // for post forms, data is sent in request.body
  //for get forms, data is sent in request.query
  let newLink = {
    weight: request.body.weight,
    path: request.body.path,
    name: request.body.name
  };
  await addLink(newLink);
  response.redirect("/admin/menu"); // redirects to the admin menu page
  console.log(request.body.path);
})

// request to delete a menu link
app.get("/admin/menu/delete", async (request, response) => {
  console.log(request.query.linkId);
  let id = request.query.linkId;
  await deleteLink(id);
  response.redirect("/admin/menu");

})


//SET UP SERVER LISTENING
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

// Mongodb helper functions

// function to connect and return the testdb database
async function connection(){
  db = client.db("http_5222_w2");
  return db;
}

// get all menu links
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({}); // use empty {} as the query to select (find) all
  let resultArray = await results.toArray(); // convert the results to an array we can use
  return resultArray;
}

// this function expects a link JSON object ti be inserted into menulinks
async function addLink(link) {
  db = await connection();
  let status = await db.collection("menuLinks").insertOne(link);
  // console.log("link added")
}

// function to delete link with the id as a parameter
async function deleteLink(id) {
  db = await connection();
   let query = {_id: new ObjectId(id)};
   let result = await db.collection("menuLinks").deleteOne(query);
}