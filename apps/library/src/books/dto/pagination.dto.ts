import { IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @Min(1)
  limit: number;

  @Min(0)
  @IsPositive()
  offset: number;
}
