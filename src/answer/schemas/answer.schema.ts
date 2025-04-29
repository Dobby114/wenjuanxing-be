import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema()
export class Answer {
  @Prop({ required: false })
  questionId: string;

  @Prop()
  answerList: {
    componentId: string;
    value: string | string[];
  }[];
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
