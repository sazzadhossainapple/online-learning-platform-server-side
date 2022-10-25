const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send(" Programming learning reactive server is running");
});

app.listen(port, () => {
  console.log(`Programming Learning Reactive runnig on port, ${port}`);
});
