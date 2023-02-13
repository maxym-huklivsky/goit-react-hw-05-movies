import { fetchForTrend } from 'api/api';
import { Error } from 'components/Error/Error';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trends, setTrends] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchForTrend()
      .then(data => setTrends(data))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {trends &&
          trends.map(trend => (
            <li key={trend.id}>
              <Link to={`/movies/${trend.id}`} state={location}>
                {trend.title ? trend.title : trend.name}
              </Link>
            </li>
          ))}
      </ul>

      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default Home;
