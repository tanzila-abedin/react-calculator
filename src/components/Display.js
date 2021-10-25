import PropTypes from 'prop-types';
// import { Textfit } from 'react-textfit';
import '../style/App.css';

const Display = ({ value }) => <div className="display">{value || '0'}</div>;

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: 0,
};
export default Display;
