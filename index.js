const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const courses = require("./data/Courses.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send(" Programming learning reactive server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((course) => course.id === id);
  res.send(singleCourse);
});

app.listen(port, () => {
  console.log(`Programming Learning Reactive runnig on port, ${port}`);
});
