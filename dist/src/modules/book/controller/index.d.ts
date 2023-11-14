import { Response, Request } from "express";
export declare class BookController {
    createBookController(req: Request, res: Response): Promise<void>;
    updateBookController(req: Request, res: Response): Promise<void>;
    allBook(req: Request, res: Response): Promise<void>;
    singleBook(req: Request, res: Response): Promise<void>;
    deleteBook(req: Request, res: Response): Promise<void>;
}
