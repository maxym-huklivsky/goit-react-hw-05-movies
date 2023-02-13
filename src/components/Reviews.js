import { fetchForReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from './Error/Error';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchForReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(({ author, content }, ind) => (
            <li key={ind}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>

      {reviews && reviews.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}

      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default Reviews;
