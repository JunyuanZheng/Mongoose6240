import * as mongoose from 'mongoose';

export default async (
  id: string,
  data: object,
  options: object
): Promise<any> => {
  const model = mongoose.model('UserLesson');
  const document = await model.findByIdAndUpdate(id, data, options);
  return document;
};
