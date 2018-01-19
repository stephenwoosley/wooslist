// DATA MODEL FOR WOOSLIST

// USER
// LIST_OF_LISTS
// LIST_OF_TODOS
// TODO


// FOLDER STRUCTURE

// MODELS
  // index.js
  // User.js 
      
  // List_of_Lists.js >> List_of_Todos.js
      // - Ref: List_of_Todos
  // List_of_Todos.js >> Todo.js
      // - Text: String
      // - Priority: Number
      // - Ref: Todo
      // - 
  // Todo.js
      // - Completed: Boolean default false
      // - Text: String
      // - Priority: Number