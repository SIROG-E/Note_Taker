// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Setup the Express App
const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
  // If no matching route is found default to index
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });