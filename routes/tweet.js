const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("트윗 조회");
});

router.post("/", (req, res) => {
  res.send("트윗 insert");
});

router.put("/:id", (req, res) => {
  res.send("트윗 update");
});

router.delete("/:id", (req, res) => {
  res.send("트윗 delete");
});

module.exports = router;
