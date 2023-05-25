const book = require("../model/book");



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
  
  
module.exports = {
    getbooks,
    createbooks,    
  };