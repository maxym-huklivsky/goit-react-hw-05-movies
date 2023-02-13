import { fetchForCast } from 'api/api';
import { imgOrigin } from 'consts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from './Error/Error';
import { ImgPlug } from './ImgPlug';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setActors(null);

    fetchForCast(movieId)
      .then(data => setActors(data))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map(({ profile_path, name, character, cast_id }) => (
            <li key={cast_id}>
              {profile_path ? (
                <img
                  src={`${imgOrigin}${profile_path}`}
                  width="100"
                  height="150"
                  alt={`${name}`}
                />
              ) : (
                <ImgPlug width="100px" height="150px" />
              )}
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>

      {actors && actors.length === 0 && (
        <p>We don't have any actors for this movie.</p>
      )}

      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default Cast;
