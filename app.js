const express = require("express");
const tweetRouter = require("./routes/tweet");
const userRouter = require("./routes/user");

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});
