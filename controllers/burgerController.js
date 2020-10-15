var express = require("express");

var router = express.Router();

// Import burger model for orm generation.
var burger = require("../models/burger.js");

// Create routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post route for making new burgers
router.post("/api/burgers", function(req, res) {
  burger.create("name", req.body.name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// Put route for moving the eaten burgers into the queue so the plates can be taken away
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  // Call the update function in the burger.js
  burger.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // In case of an error when trying to update a row that doesn't exist
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete Route for clearing the empty plate from the burger
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
