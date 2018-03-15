import * as mongoose from 'mongoose';
import { IUserLessonSchema } from '../../models';

export const userLessonArray: IUserLessonSchema[] = [
  <IUserLessonSchema>{
    _id: '27807a3b',
    highlights: [
      {
        _id: '1',
        color: 'blue',
        range: {
          start: 1,
          end: 2,
        },
      },
      {
        _id: '2',
        color: 'green',
        range: {
          start: 3,
          end: 4,
        },
      },
      {
        _id: '3',
        color: 'purple',
        range: {
          start: 4,
          end: 5,
        },
      }
    ],
  }
];
