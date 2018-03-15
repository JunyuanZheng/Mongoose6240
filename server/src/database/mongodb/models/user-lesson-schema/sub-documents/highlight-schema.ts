import * as mongoose from 'mongoose';

export interface IHighlightSchema extends mongoose.Types.Subdocument {
  _id: string;
  color: string;
  range: {
    start: number;
    end: number;
  };
}

const highlightSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  range: {
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    }
  }
});

export default highlightSchema;
