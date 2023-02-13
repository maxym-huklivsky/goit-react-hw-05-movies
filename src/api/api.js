import axios from 'axios';
import { errorFunction } from 'helpers/errorReject';
import './default';

export const fetchForTrend = async () => {
  try {
    const resp = await axios.get('/trending/all/day');

    return resp.data.results;
  } catch (error) {
    return errorFunction('Не удалось загрузить тренды.');
  }
};

export const fetchForMovieDetailes = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}`);

    return resp.data;
  } catch (error) {
    return errorFunction('Не удалось загрузить детали фильма.');
  }
};

export const fetchForSearch = async query => {
  try {
    const resp = await axios.get('/search/movie', {
      params: { query },
    });

    return resp.data.results;
  } catch (error) {
    return errorFunction('Не удалось загрузить фильмы.');
  }
};

export const fetchForCast = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}/credits`);

    return resp.data.cast;
  } catch (error) {
    return errorFunction('Не удалось загрузить актерский состав.');
  }
};

export const fetchForReviews = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}/reviews`);

    return resp.data.results;
  } catch (error) {
    return errorFunction('Не удалось загрузить отзывы.');
  }
};
