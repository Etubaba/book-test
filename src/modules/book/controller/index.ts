import { Response, Request } from "express";
import { BookService } from "../service";
import { CreateBookDto } from "../dto/createBookDto";
import { UpdateBookDto } from "../dto/updateBookDto";

const bookService = new BookService();
export class BookController {
  async createBookController(req: Request, res: Response) {
    const createBookDto: CreateBookDto = req.body;
    const response = await bookService.createBook(createBookDto);
    res.status(response.statusCode).json(response);
  }

  async updateBookController(req: Request, res: Response) {
    const updateBookDto: UpdateBookDto = req.body;
    const id = req.params.id;
    const response = await bookService.updateBook(id, updateBookDto);
    res.status(response.statusCode).json(response);
  }

  async allBook(req: Request, res: Response) {
    const response = await bookService.BookList();
    res.status(response.statusCode).json(response);
  }

  async singleBook(req: Request, res: Response) {
    const id = req.params.id;
    const response = await bookService.singleBook(id);
    res.status(response.statusCode).json(response);
  }

  async deleteBook(req: Request, res: Response) {
    const id = req.params.id;
    const response = await bookService.deleteBook(id);
    res.status(response.statusCode).json(response);
  }
}
