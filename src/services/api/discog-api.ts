export const getResultsByQuery = async (urlGetParams: string) => {
  return fetch(`https://api.discogs.com/database/search?${urlGetParams}`, {
    headers: new Headers({
      'Authorization': `Discogs key=${import.meta.env.VITE_DISCOG_KEY}, secret=${import.meta.env.VITE_DISCOG_SECRET}`
    }),
  }).then(r => r.json());
};
