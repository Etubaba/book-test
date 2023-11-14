"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const validateDto_1 = require("../../../middleware/validateDto");
const createBookDto_1 = require("../dto/createBookDto");
const updateBookDto_1 = require("../dto/updateBookDto");
const router = (0, express_1.Router)();
const basePath = "/api/";
const bookController = new controller_1.BookController();
router.post(`${basePath}books`, (0, validateDto_1.validateDto)(createBookDto_1.CreateBookDto), bookController.createBookController);
router.put(`${basePath}books/:id`, (0, validateDto_1.validateDto)(updateBookDto_1.UpdateBookDto), bookController.updateBookController);
router.get(`${basePath}books/:id`, bookController.singleBook);
router.delete(`${basePath}books/:id`, bookController.deleteBook);
router.get(`${basePath}books`, bookController.allBook);
exports.default = router;
//# sourceMappingURL=index.js.map