import * as mongoose from 'mongoose';

export default async (data: object): Promise<any> => {
  try {
    const model = mongoose.model('UserLesson');
    await model.create(data);
    return;
  } catch (e) {
    throw {
      errorCode: 500,
      errorMessage: new Error(e)
    };
  }
};
