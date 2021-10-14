import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
// import '../App.css';

const Display = ({ value = 0 }) => (
  <Textfit className="display" mode="single" max={70}>
    {value}
  </Textfit>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: 0,
};
export default Display;
