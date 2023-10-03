// Create web server application with Node.js and Express.js
// Create a new file named comments.js in the routes directory.
// In comments.js, import express and create a router object with express.Router().
// Create a new route with router.get() for the path /comments. The route handler function should respond with the message "Comments".
// Export the router from the module.
// Import the router in app.js and register the route with the path /api/comments.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Comments");
});

module.exports = router;