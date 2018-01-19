var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var UserSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
  },
  // `todos` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Todo model
  // This allows populating the User with any associated Todos
  todos: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Todo model
      ref: "Todo"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;