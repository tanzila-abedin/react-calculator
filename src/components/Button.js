// import '../App.css';
import PropTypes from 'prop-types';

const Button = ({ className, value, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
