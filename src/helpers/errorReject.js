export const errorFunction = error =>
  Promise.reject(new Error(`${error} Попробуйте перезагрузить страницу`));
