var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 8000;

var db = require("./models");

var app = express();

// use morgan for logging
app.use(logger("dev"));
// use bodyParser for form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, setting it to use promises  instead
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/tododb", {
  useMongoClient: true
});



// Routes


// Retrieve all Todos from the db
app.get("/todos", function(req, res) {
  db.Todo.find({})
    .then(function(dbTodo){
      res.json(dbTodo);
    })
    .catch(function(err){
      res.json(err);
    });
});

// Retrieve all Teams from the db
app.get("/teams", function(req, res) {
  db.Team.find({})
    .then(function(dbTeam){
      res.json(dbTeam);
    })
    .catch(function(err){
      res.json(err);
    });
});

// Retrieve all List_of_Lists from the db
app.get("/list_of_lists", function(req, res) {
  db.List_of_Lists.find({})
    .then(function(db_list_of_lists){
      res.json(db_list_of_lists);
    })
    .catch(function(err){
      res.json(err);
    });
});

// Retrieve all List_of_Lists from the db
app.get("/list_of_todos", function(req, res) {
  db.List_of_Todos.find({})
    .then(function(db_list_of_todos){
      res.json(db_list_of_todos);
    })
    .catch(function(err){
      res.json(err);
    });
});

// Retrieve all Users from the db
app.get("/users", function(req, res) {
  db.User.find({})
    .then(function(dbUser){
      res.json(dbUser);
    })
    .catch(function(err){
      res.json(err);
    });
});

app.post("/submitTodo", (req, res) => {
  console.log("Todo sent from page: " + req.body.text)
  db.Todo.create(req.body)
    .then((dbTodo) => {
      res.json(dbTodo)
    })
    .catch(function(err) {
      res.json(err);
    });
})

app.post("/submitUser", (req, res) => {
  console.log("User sent from page: " + req.body.name)
  db.User.create(req.body)
    .then((dbUser) => {
      res.json(dbUser)
    })
    .catch(function(err) {
      res.json(err);
    });
})

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
