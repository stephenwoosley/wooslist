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
app.use(bodyParser.urlencoded({ extended: false }));
// use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, setting it to use promises  instead
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/tododb", {
  useMongoClient: true
});

// on server start, create/save a new User doc. unique rule in schema prevents duplicate users
db.User.create({ name: "Stephen Woosley" })
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// Routes

// Retrieve all Todos from the db
app.get("/todos", function(req, resp) {
  db.Todo.find({})
    .then(function(dbTodo){
      res.json(dbTodo);
    })
    .catch(function(err){
      res.json(err);
    });
});

app.get("/user", function(req, res) {
  db.User.find({})
})
