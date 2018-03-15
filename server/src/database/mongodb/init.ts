import * as config from 'config';
import * as mongoose from 'mongoose';
import { UserLessonSchema } from './models';
import * as populate from './populate';
(<any>mongoose).Promise = Promise;

const dbUrl = `mongodb://${config.get('DATABASE.MONGODB.HOST')}`;

const baseOptions = {
  autoReconnect: true,
  reconnectInterval: 10 * 1000,
  reconnectTries: Number.MAX_VALUE,
  promiseLibrary: global.Promise
};

const options = baseOptions;

const init = async () => {
  return new Promise(resolve => {
    mongoose.connect(dbUrl, options);

    mongoose.connection.on('connected', () => {
      console.log('connected')
      mongoose.model('UserLesson', UserLessonSchema);
      resolve();
    });

    mongoose.connection.on('disconnected', () => {
      console.log('disconnected')
    });

    mongoose.connection.on('error', err => console.log(err));

    const gracefulShutdown = (msg, callback) => {
      mongoose.connection.close(() => {
        console.log(`Mongoose Disconnected through ${msg}`);
        callback();
      });
    };

    process.once('SIGUSR2', () => {
      gracefulShutdown('Nodemon Restart', () => {
        process.kill(process.pid, 'SIGUSR2');
      });
    });

    process.on('SIGINT', () => {
      gracefulShutdown('App Termination', () => {
        process.exit(0);
      });
    });
  });
};

export default async () => {
  await init();
  await populate.init();
};
