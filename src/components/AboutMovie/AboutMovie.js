import PropTypes from 'prop-types';
import { ImgPlug } from 'components/ImgPlug';
import { imgOrigin } from 'consts';
import { reduceGenres } from 'helpers/reduceGenres';
import { MovieInfoWrap, MovieWrap, Poster } from './AboutMovie.styled';

export const AboutMovie = ({
  movie: {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => (
  <MovieWrap>
    {poster_path ? (
      <Poster
        src={`${imgOrigin}${poster_path}`}
        alt={title ? title : name}
        width="300"
        height="450"
      />
    ) : (
      <ImgPlug width="300px" height="450px" />
    )}
    <MovieInfoWrap>
      <h2>
        {title ? title : name} ({release_date.slice(0, 4)})
      </h2>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.length !== 0 ? reduceGenres(genres) : 'No genres'}</p>
    </MovieInfoWrap>
  </MovieWrap>
);

AboutMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
