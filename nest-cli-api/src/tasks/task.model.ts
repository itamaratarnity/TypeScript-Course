import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  description!: string;
}
