const express = require("express");
const router = express.Router();
const { create, listAll, booksCount, removeSoft, read, update, list } = require("../controllers/book");

router.post("/book", create);
router.get("/books/total", booksCount);  
router.get("/books/:count", listAll);
router.patch("/book/:slug", removeSoft);
router.get("/book/:slug", read);
router.put("/book/:slug", update);
router.post("/books", list);

module.exports = router;