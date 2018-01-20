var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Team_Schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  // `users` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the User model
  // This allows populating the User with any associated Users
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Team = mongoose.model("Team", Team_Schema);

// Export the Team model
module.exports = Team;