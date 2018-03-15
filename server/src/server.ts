import * as express from 'express';
import { init, utilities, populate } from './database/mongodb';

export default async () => {
  const app = express();
  await init();

  app.get(
    '/success',
    async (req, res) => {
      await utilities.findByIdAndUpdate(
        '27807a3b',
        {
          $pull: {
            highlights: {
              _id: {
                $in: ['1', '2', '3']
              }
            }
          }
        },
        {
          runValidators: false 
        }
      );
      // the subdocumments are removed. I am just repupulating the db so it's easier to test
      await populate.init();
      res.status(200);
      res.json({});
      return;
    }
  )

  app.get(
    '/fail',
    async (req, res) => {
      try {
        await utilities.findByIdAndUpdate(
          '27807a3b',
          {
            $pull: {
              highlights: {
                _id: {
                  $in: ['1', '2', '3']
                }
              }
            }
          },
          {
            runValidators: true 
          }
        );
      } catch (e) {
        res.status(500);
        res.json(e.message);
        return;
      }
    }
  )
  
  app.listen(3000, () => console.log('Listening On Port 3000'))
  return app;
};
