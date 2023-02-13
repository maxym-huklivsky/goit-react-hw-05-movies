import { fetchForSearch } from 'api/api';
import { Error } from 'components/Error/Error';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const search = searchParams.get('query');

  useEffect(() => {
    if (!search) {
      return;
    }

    setError(null);
    setMovies(null);

    fetchForSearch(search)
      .then(data => {
        setMovies(data);
      })
      .catch(error => setError(error));
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.movie.value.trim();

    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);

    if (!query) {
      setMovies(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies &&
          movies.lenght !== 0 &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={location}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
      </ul>

      {movies && movies.length === 0 && (
        <p>No movies were found for your request</p>
      )}

      {!movies && !error && <p>Enter name of your searching movie</p>}

      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default Movies;
