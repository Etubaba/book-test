"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const service_1 = require("../service");
const bookService = new service_1.BookService();
class BookController {
    async createBookController(req, res) {
        const createBookDto = req.body;
        const response = await bookService.createBook(createBookDto);
        res.status(response.statusCode).json(response);
    }
    async updateBookController(req, res) {
        const updateBookDto = req.body;
        const id = req.params.id;
        const response = await bookService.updateBook(id, updateBookDto);
        res.status(response.statusCode).json(response);
    }
    async allBook(req, res) {
        const response = await bookService.BookList();
        res.status(response.statusCode).json(response);
    }
    async singleBook(req, res) {
        const id = req.params.id;
        const response = await bookService.singleBook(id);
        res.status(response.statusCode).json(response);
    }
    async deleteBook(req, res) {
        const id = req.params.id;
        const response = await bookService.deleteBook(id);
        res.status(response.statusCode).json(response);
    }
}
exports.BookController = BookController;
//# sourceMappingURL=index.js.map