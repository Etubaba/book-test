import { IsOptional } from "class-validator";

export class UpdateBookDto {
  @IsOptional()
  name: string;

  @IsOptional()
  author: string;
}
