export const errorFunction = () =>
  Promise.reject(
    new Error('Ой! Что то пошло не так. Попробуйте перезапустить страницу')
  );
