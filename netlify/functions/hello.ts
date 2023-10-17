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
  const { city, country } = context.geo;
  console.log(city, country);

  try {
    // return city and country to the client
    return new Response(`Travel guide for ${city} in ${country}!`);
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

export const config: Config = {
  path: '/whatismyip',
};
