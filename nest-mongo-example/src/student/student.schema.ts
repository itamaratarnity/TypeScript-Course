import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  name!: string;

  @Prop()
  age!: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);