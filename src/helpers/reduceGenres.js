export const reduceGenres = genres =>
  genres.reduce((str, { name }) => `${str}, ${name}`, '').slice(2);
