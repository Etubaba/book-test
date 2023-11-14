import { CreateBookDto } from "../dto/createBookDto";
import { UpdateBookDto } from "../dto/updateBookDto";
export declare class BookService {
    createBook(createBookDto: CreateBookDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            name: string;
            author: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    BookList(): Promise<{
        statusCode: number;
        data: {
            id: string;
            name: string;
            author: string;
        }[];
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    singleBook(id: string): Promise<{
        statusCode: number;
        data: {
            id: string;
            name: string;
            author: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    updateBook(id: string, updateBookDto: UpdateBookDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            name: string;
            author: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    deleteBook(id: string): Promise<{
        statusCode: number;
        message: any;
    }>;
}
