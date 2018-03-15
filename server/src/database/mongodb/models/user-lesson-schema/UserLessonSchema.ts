import * as mongoose from 'mongoose';
import {
  HighlightSchema,
  IHighlightSchema,
} from './sub-documents';

interface IUserLesson {
  _id: any;
  highlights: mongoose.Types.DocumentArray<IHighlightSchema>;
}

export interface IUserLessonSchema extends IUserLesson, mongoose.Document {}

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  highlights: [HighlightSchema],
});

export default schema;
