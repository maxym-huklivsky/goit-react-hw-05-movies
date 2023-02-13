import { Link } from 'react-router-dom';
import { AddInfo } from './AddInfoMovie.styled';

export const AddInfoMovie = () => (
  <AddInfo>
    <h3>Additional information</h3>

    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  </AddInfo>
);
