// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Rendering Function for the page taking all the burgers in the array
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // Create function takes the name of the burger from controller and passes to ORM
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  // Update function takes the id from controller and passes to ORM
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // Delete function takes the id from controller and passes to ORM
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export burger model back to burgerController
module.exports = burger;
