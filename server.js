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

//  API routes

//  get route
app.get("/api/notes", function (req, res) {

  readData(notes => {
    console.log('Read notes:', notes);
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
      id = notes.length + 1;
    }

    newNote.id = id;
    notes.push(newNote);
    console.log('Pushed new note: ', newNote);

    updateData(notes, update => {
      console.log('Updated database: ', notes);

      res.send(update);
    })
  });
});


app.delete("/api/notes/:id", function (req, res) {

  readData(notes => {

    console.log('Find ID to delete: ', req.params.id);

    var index = notes.map(note => {
      return note.id;
    }).indexOf(req.params.id);

    console.log('Notes before delete: ', notes);
    notes.splice(index, 1);
    console.log('Notes after delete: ', notes);

    updateData(notes, update => {
      res.send(update);
    })

  });

});

// var index = list.map(x => {
//   return x.Id;
// }).indexOf(id);


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


function updateDb() {
  fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
    if (err) throw err;
    return true;
  });
}

// Setup notes variable
fs.readFile("db/db.json", "utf8", (err, data) => {
  if (err) throw err;
  var notes = JSON.parse(data);

  //            API routes
  //  get route
  // app.get("/api/notes", function (req, res) {
  //   res.json(notes);
  // })
  // //post route
  // app.post("/api/notes", function (req, res) {
  //   let newNote = req.body;
  //   notes.push(newNote);
  //   updateDb();
  //   return console.log("New note added: " + newNote.title);
  // });

  // Retrieve note w/ specific id
  app.get("/api/notes/:id", function (req, res) {
    res.json(notes[req.params.id]);
  });

  // Delete note w/ specific id
  // app.delete("/api/notes/:id", function (req, res) {
  //   notes.splice(req.params.id, 1);
  //   updateDb();
  //   console.log("Note deleted with id: " + req.params.id);
  // });



  // update db.json when note is added or deleted.
  function updateDb() {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
      if (err) throw err;
      return true;
    });
  }

  // Routes
  // Display notes.html when notes is accessed
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  // If no matching route is found default to index
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });



});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});