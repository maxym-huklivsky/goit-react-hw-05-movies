import axios from 'axios';
import { errorFunction } from 'helpers/errorReject';
import { params } from './params';
import './default';

export const fetchForTrend = async () => {
  try {
    const resp = await axios.get('/trending/all/day', {
      params,
    });

    return resp.data.results;
  } catch (error) {
    return errorFunction();
  }
};

export const fetchForMovieDetailes = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}`, {
      params,
    });

    return resp.data;
  } catch (error) {
    return errorFunction();
  }
};

export const fetchForSearch = async query => {
  try {
    const resp = await axios.get('/search/movie', {
      params: { ...params, query },
    });

    return resp.data.results;
  } catch (error) {
    return errorFunction();
  }
};

export const fetchForCast = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}/credits`, {
      params,
    });

    return resp.data.cast;
  } catch (error) {
    return errorFunction();
  }
};

export const fetchForReviews = async movieId => {
  try {
    const resp = await axios.get(`/movie/${movieId}/reviews`, {
      params,
    });

    return resp.data.results;
  } catch (error) {
    return errorFunction();
  }
};
