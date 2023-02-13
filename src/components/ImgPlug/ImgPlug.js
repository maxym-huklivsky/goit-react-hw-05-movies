import { Container } from './ImgPlug.styled';
import PropTypes from 'prop-types';

export const ImgPlug = ({ width, height }) => (
  <div>
    <Container width={width} height={height}>
      No picture(
    </Container>
  </div>
);

ImgPlug.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
