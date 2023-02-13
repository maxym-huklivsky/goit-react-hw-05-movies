import PropTypes from 'prop-types';

import { LinkButton } from './ButtonLink.styled';

export const ButtonLink = ({ children, path }) => (
  <LinkButton to={path}>{children}</LinkButton>
);

ButtonLink.propTypes = {
  path: PropTypes.object.isRequired,
};
