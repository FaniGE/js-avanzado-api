import { Router } from "express";
import { methods as bookController } from "./../controllers/book.controller.js";

const router = Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

//adicionales
router.get("/search/:title", bookController.getBookByName); 
router.get("/total/books/", bookController.getCountTotalBooks);

export default router;