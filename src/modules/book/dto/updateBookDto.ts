import { IsOptional } from "class-validator";

export class UpdateBookDto {
  @IsOptional()
  title: string;

  @IsOptional()
  author: string;

  @IsOptional()
  publicationYear: number;

  @IsOptional()
  isbn: string;
}
