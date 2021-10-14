import PropTypes from 'prop-types';

const ButtonPanel = ({ children }) => (
  <div className="buttonPanel">{children}</div>
);

ButtonPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ButtonPanel;
