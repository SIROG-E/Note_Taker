// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Setup the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
// Display notes.html when notes is accessed
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// // If no matching route is found default to index
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });


//  get route
app.get("/api/notes", function (req, res) {

  readData(notes => {
    res.json(notes);
  });
});


// post route
app.post("/api/notes", function (req, res) {
  let newNote = req.body;

  readData(notes => {

    var id = 0;

    if (notes.length == 0) {
      id = 1;
    } else {
      var lastNote = notes[notes.length - 1];
      id = lastNote.id + 1;
    }

    newNote.id = id;
    notes.push(newNote);

    updateData(notes, update => {
      res.send(update);
    })
  });
});


app.delete("/api/notes/:id", function (req, res) {

  readData(notes => {

    var id = parseInt(req.params.id);

    var ids = notes.map(note => {
      return note.id;
    });

    var index = ids.indexOf(id);

    notes.splice(index, 1);

    updateData(notes, update => {
      res.send(update);
    })

  });

});

function readData(callback) {

  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);

    callback(notes);
  });

}

function updateData(notes, callback) {
  fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
    if (err) throw err;

    callback(true);
  });
}

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});