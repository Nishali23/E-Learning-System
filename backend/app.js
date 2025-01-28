const express = require("express");
const app = express();
const students = require("./routes/students");
const teachers = require("./routes/teachers");
const announcements = require("./routes/announcements");
const courses = require("./routes/courses");
const auth = require("./routes/auth");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use("/api/v1/students", students);

app.use("/api/v1/teachers", teachers);

app.use("/api/v1/announcements", announcements);

app.use("/api/v1/courses", courses);

app.use("/api/v1/auth", auth);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
