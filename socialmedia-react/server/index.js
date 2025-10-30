const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

// simple root
app.get("/", (req, res) => res.send("MiniSocial API is running"));

app.listen(port, () => console.log(`Server running on port ${port}`));
