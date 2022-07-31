const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app;
app.use(cors());

// Routes

app.use(require("./routes/index"));

app.listen(3001);
console.log("Server on port", 3001);
