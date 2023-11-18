const express = require("express");
const path = require("path");

const app = express();

app.use("/", (req, res, next) => {
  console.log(req.method, " : ", req.url);
  next();
});

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Start the server
app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
