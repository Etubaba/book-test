"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const main_1 = require("../../../main");
class BookService {
    async createBook(createBookDto) {
        try {
            const { name, author } = createBookDto;
            const Book = await main_1.prisma.books.create({
                data: { author, name },
            });
            return {
                statusCode: 201,
                data: Book,
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async BookList() {
        try {
            const allBooks = await main_1.prisma.books.findMany({});
            return { statusCode: 200, data: allBooks };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async singleBook(id) {
        try {
            const book = await main_1.prisma.books.findUnique({
                where: {
                    id,
                },
            });
            if (!book)
                return { statusCode: 404, message: "Record not fount" };
            return { statusCode: 200, data: book };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async updateBook(id, updateBookDto) {
        try {
            const { name, author } = updateBookDto;
            const book = await main_1.prisma.books.findUnique({
                where: {
                    id,
                },
            });
            if (!book)
                return { statusCode: 404, message: "Record not fount" };
            const newBook = await main_1.prisma.books.update({
                where: {
                    id,
                },
                data: {
                    name,
                    author,
                },
            });
            return { statusCode: 200, data: newBook };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async deleteBook(id) {
        try {
            const Book = await main_1.prisma.books.findUnique({
                where: {
                    id,
                },
            });
            if (!Book) {
                return { statusCode: 404, message: "Record not found" };
            }
            await main_1.prisma.books.delete({
                where: {
                    id,
                },
            });
            return {
                statusCode: 200,
                message: "Book  deleted successfully",
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
}
exports.BookService = BookService;
//# sourceMappingURL=index.js.map