// import { Config, Context } from '@netlify/functions';

// export default async (req: Request, context: Context) => {
//   const { city, country } = context.params;

//   return new Response(`Travel guide for ${city} in ${country}!`);
// };

// export const config = {
//   path: '/travel-guide/:country/:city',
// };

import { Config, Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
  return new Response(`Your IP is ${context.ip}`);
};

export const config: Config = {
  path: '/whatismyip',
};
