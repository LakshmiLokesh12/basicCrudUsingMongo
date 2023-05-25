const book = require("../model/book");

//const { getbooks, createbook, updatebook } = require("./controllers/book.controller");


  const getbooks = (req, res) => {
    book.find((err, book1s) => {
      if (err) {
        res.send(err);
      }
      res.json(book1s);
    });
  };
  
  
 
  
  const createbooks = async (req, res) => {
    const book1 =  new book({
      title: req.body.title,
      description: req.body.description
    });
  
   await book1.save((err, book1) => {
      if (err) {
        res.send(err);
      }
      res.json(book1);
    });
  };
  
  const updatebooks = (req, res) => {
    Todo.findOneAndUpdate(
      { _id: req.params.book1ID },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        },
      },
      { new: true },
      (err, book) => {
        if (err) {
          res.send(err);
        } else res.json(book);
      }
    );
  };
  
  const deletebook = (req, res) => {
    book.deleteOne({ _id: req.params.book1ID })
      .then(() => res.json({ message: "book Deleted" }))
      .catch((err) => res.send(err));
  };
  

module.exports = {
    getbooks,
    createbook,
    updatebook,
    deletebook    
  };