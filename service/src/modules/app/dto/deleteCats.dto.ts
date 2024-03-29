import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteCatsDto {
  @ApiProperty({ example: 1, description: '要删除app分类Id', required: true })
  @IsNumber({}, { message: 'ID必须是Number' })
  id: number;
}
