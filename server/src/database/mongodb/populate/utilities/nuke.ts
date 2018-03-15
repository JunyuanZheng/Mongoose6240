import * as mongoose from 'mongoose';

export default async () => {
  const userLessonModel = mongoose.model('UserLesson');
  await userLessonModel.remove({});
};
