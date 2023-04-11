const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 조회");
});

router.get("/:id", (req, res) => {
  res.send("특정 유저 조회");
  console.log(req.params);
  //콘솔에 찍게 해줌 (params = id )
});

router.post("/", (req, res) => {
  res.send("회원가입");
});

router.put("/:id", (req, res) => {
  res.send("회원가입 put");
});

router.delete("/:id", (req, res) => {
  res.send("회원가입 delect");
});

module.exports = router;
