const express = require("express");
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Website!</h1><p>Built with Node.js</p>");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
