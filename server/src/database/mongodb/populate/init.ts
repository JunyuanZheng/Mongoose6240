import * as config from 'config';
import * as devstaging from './dev-staging';

export default async (): Promise<void> => {
  await devstaging.init();
};
