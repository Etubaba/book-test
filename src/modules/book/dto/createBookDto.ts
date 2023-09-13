import { IsNotEmpty } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  publicationYear: number;

  @IsNotEmpty()
  isbn: string;
}
