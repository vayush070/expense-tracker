const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

connectDB();

app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API RUNNING :)"));

app.use("/expense", require("./routes/api/expense"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
