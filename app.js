const express = require("express");

const hbs = require("hbs");
const { data } = require("./js/data");
//registering the partials dir
hbs.registerPartials(__dirname + "/views/partials");
// initializing of express app
const app = express();
// setting of view engine to hbs
app.set("view engine", "hbs");
// setting the views dir location
app.set("views", __dirname + "/views");
// for static files
app.use(express.static("public"));
// Our Route
app.get("/", (request, response) => {
  console.log("Rendering of home page");
  //   response.sendFile(__dirname + "/views/home.html");
  response.render("home", { "page-title": "Home Page", ...data });
});

app.get("/about", (request, response) => {
  console.log("Rendering the about page");
  response.render("about", { "page-title": "About Page", ...data });
});

app.get("/works", (request, response) => {
  console.log("Rendering the works page");
  response.render("works", { "page-title": "Works Page", ...data });
});

app.get("/gallery", (request, response) => {
  console.log("Rendering the photo-gallery page");
  response.render("gallery", { "page-title": "Gallery Page", ...data });
});

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
