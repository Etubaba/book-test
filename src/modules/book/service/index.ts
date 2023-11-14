import { prisma } from "../../../main";
import { CreateBookDto } from "../dto/createBookDto";
import { UpdateBookDto } from "../dto/updateBookDto";

export class BookService {
  async createBook(createBookDto: CreateBookDto) {
    try {
      const { name, author }: CreateBookDto = createBookDto;

      //create Books
      const Book = await prisma.books.create({
        data: { author, name },
      });

      return {
        statusCode: 201,
        data: Book,
      };
    } catch (err: any) {
      return { statusCode: 500, message: err.message };
    }
  }

  async BookList() {
    try {
      const allBooks = await prisma.books.findMany({});

      return { statusCode: 200, data: allBooks };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
  async singleBook(id: string) {
    try {
      //check if record exist
      const book = await prisma.books.findUnique({
        where: {
          id,
        },
      });
      if (!book) return { statusCode: 404, message: "Record not fount" };

      return { statusCode: 200, data: book };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    try {
      const { name, author }: UpdateBookDto = updateBookDto;
      //check if record exist
      const book = await prisma.books.findUnique({
        where: {
          id,
        },
      });
      if (!book) return { statusCode: 404, message: "Record not fount" };

      //update

      const newBook = await prisma.books.update({
        where: {
          id,
        },
        data: {
          name,
          author,
        },
      });

      return { statusCode: 200, data: newBook };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async deleteBook(id: string) {
    try {
      //check if book exist
      const Book = await prisma.books.findUnique({
        where: {
          id,
        },
      });
      if (!Book) {
        return { statusCode: 404, message: "Record not found" };
      }

      await prisma.books.delete({
        where: {
          id,
        },
      });

      return {
        statusCode: 200,
        message: "Book  deleted successfully",
      };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
}
