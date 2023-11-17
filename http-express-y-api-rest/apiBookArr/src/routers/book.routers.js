const { Router } = require("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");

router.get("/", bookCtrl.getStart);

router.get("/books", bookCtrl.getBooks);

router.post("/books", bookCtrl.addBook);

router.put("/books", bookCtrl.editBook);

router.delete("/books", bookCtrl.deleteBook);

module.exports = router;
