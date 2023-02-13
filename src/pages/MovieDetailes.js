import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { fetchForMovieDetailes } from 'api/api';
import { Error } from 'components/Error';
import { ButtonLink } from 'components/ButtonLink';
import { AddInfoMovie } from 'components/AddInfoMovie';
import { AboutMovie } from 'components/AboutMovie';

const MovieDetailes = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backHref = useRef(location.state ?? '/movies');

  useEffect(() => {
    fetchForMovieDetailes(movieId)
      .then(data => setMovie(data))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <ButtonLink path={backHref.current}>Go back</ButtonLink>
      {movie && (
        <>
          <AboutMovie movie={movie} />
          <AddInfoMovie />
        </>
      )}

      {error && <Error>{error.message}</Error>}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailes;
