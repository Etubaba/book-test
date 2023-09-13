import { Router } from "express";
import { BookController } from "../controller";
import { validateDto } from "../../../middleware/validateDto";
import { CreateBookDto } from "../dto/createBookDto";

import { UpdateBookDto } from "../dto/updateBookDto";

const router: Router = Router();
const basePath = "/api/";

const bookController = new BookController();
router.post(
  `${basePath}books`,

  validateDto(CreateBookDto),
  bookController.createBookController
);
router.put(
  `${basePath}books/:id`,
  validateDto(UpdateBookDto),
  bookController.updateBookController
);
router.get(
  `${basePath}books/:id`,

  bookController.singleBook
);
router.delete(
  `${basePath}books/:id`,

  bookController.deleteBook
);
router.get(`${basePath}books`, bookController.allBook);

export default router;
