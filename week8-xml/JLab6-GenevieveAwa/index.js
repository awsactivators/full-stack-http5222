const express = require("express");
const path = require("path");

const library = require("./components/library");

const app = express();
const port = process.env.PORT || "8889";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (request, response) => {
  let data = await library.loadLibraries();
  response.render("index", { title: "Home", libraries: data });
});
app.get("/library/:id", async (request, response) => {
  let libraryData = await library.getLibraryById(request.params.id);
  response.render("library", { title: "Library", branch: libraryData });
});

//server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});