const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Question = require("./db/Question");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  }else{
    res.send({ result: "No User Found" });
  }
});

app.post("/add-question", async (req, res) => {
  let question = new Question(req.body);
  let result = await question.save();
  res.send(result);
});

app.get("/questions", async (req, res) => {
  const questions = await Question.find();
  if (questions.length > 0) {
    res.send(questions);
  } else {
    res.send({ result: "No question Found" });
  }
});

app.get("/questions/:id", async (req, res) => {
  let result = await Question.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Question Found" });
  }
});

app.get("/search/:key", async (req, res) => {
  let result = await Question.find({
    $or: [
      {
        question: { $regex: req.params.key },
      },
    ],
  });
    res.send(result);
});

// app.get("/extractTags/:key", async (req, res) => {
//   let result = await Question.find({
//     $or: [
//       {
//         question: { $regex: req.params.key },
//       },
//     ],
//   });
//     res.send(result);
// });

app.listen(5000);
