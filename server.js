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
app.use(express.static(path.join(__dirname)));


// Setup notes variable
fs.readFile("db/db.json", "utf8", (err, data) => {
  if (err) throw err;
  var notes = JSON.parse(data);

  //                API routes
  //  get route
  app.get("/api/notes", function(req, res) {
    res.json(notes);
  })
  // post route
  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("New note added: " +newNote.title);
  });

  // Retrieve note w/ specific id
  app.get("/api/notes/:id", function(req, res) {
    res.json(notes[req.params.id]);
  });

  // Delete note w/ specific id
  app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Note deleted with id: " + req.params.id);
  });

                    // Routes
  // Display notes.html when notes is accessed
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
  // If no matching route is found default to index
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  // update db.json when note is added or deleted.
  function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'), err => {
      if (err) throw err;
      return true;
    });
  }
});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});