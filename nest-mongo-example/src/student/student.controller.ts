import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

export class CreateStudentDto {
  readonly name!: string;
  readonly age!: number;
  readonly grade!: string;
}

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() student: CreateStudentDto) {
    return this.studentService.create(student);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.studentService.findAll();
  }
}