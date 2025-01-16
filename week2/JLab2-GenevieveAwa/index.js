//import required modules 
const express = require("express"); 
const path = require("path"); 
 
//set up Express object and port 
const app = express(); // function to init an express app
const port = process.env.PORT || "8555"; 

// Set up template engine (path to my files)
app.set("views", path.join(__dirname, "views")) // set views to use the app_directory/views folder to store template files
app.set("view engine", "pug"); // set express to use pug as the template (view) engine

// Set up folder for static files (css, images, and client-side js)
app.use(express.static(path.join(__dirname, "public")));
 
//test message 
app.get("/", (req, res) => { 
  // res.status(200).send("Test page"); 
  res.render("index", {title: "Home"});
}); 

app.get("/about", (req, res) => { 
  // res.status(200).send("Test page"); 
  res.render("about", {title: "About"});
});

app.get("/contact", (req, res) => { 
  // res.status(200).send("Test page"); 
  res.render("contact", {title: "Contact"});
});
 
//set up server listening 
app.listen(port, () => { 
  console.log(`Listening on http://localhost:${port}`); 
});