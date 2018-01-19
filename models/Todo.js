var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new TodoSchema object
var TodoSchema = new Schema({
  completed: { type: Boolean, default: false },
  text: String
});

// This creates our model from the above schema, using mongoose's model method
var Todo = mongoose.model("Todo", TodoSchema);

// Export the Note model
module.exports = Todo;