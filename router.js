const router = require("express").Router();
const { getbooks } = require("./controllers/book.controller");
const { createbook, updatebook , deletebook} = require("./controllers/book.controller");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API in mongo!");
});

router.get("/books", getbooks);
router.post("/books", createbooks);
router.put("/book1s/:book1ID", updatebook);

router.delete("/book1s/:book1ID", deletebook);

module.exports = router;
