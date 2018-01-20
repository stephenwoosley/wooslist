var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var List_of_Lists_Schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  // `list_of_todos` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the List_of_Todos model
  // This allows populating the List_of_Lists with any associated List_of_Todos
  list_of_todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "List_of_Todos"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var List_of_Lists = mongoose.model("List_of_Lists", List_of_Lists_Schema);

// Export the List_of_Todos_Schema model
module.exports = List_of_Lists;