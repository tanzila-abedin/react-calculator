import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Wrapper;
