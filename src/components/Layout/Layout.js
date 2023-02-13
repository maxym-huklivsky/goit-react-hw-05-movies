import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledLink } from './Layout.styled';

export const Layout = () => (
  <>
    <Navigation>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Navigation>

    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </>
);
