const router = require("express").Router();
const { getbooks } = require("./controllers/book.controller");
const { createbooks } = require("./controllers/book.controller");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API in mongo!");
});

router.get("/books", getbooks);
router.post("/books", createbooks);

module.exports = router;
