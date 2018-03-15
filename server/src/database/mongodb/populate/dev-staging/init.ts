import * as mongoose from 'mongoose';
import { nuke } from '../utilities';
import { userLessonArray } from './constants';
import { create } from '../../utilites';

export default async () => {
  await nuke();
  for (const userLesson of userLessonArray) {
    await create(userLesson);
  }
};
