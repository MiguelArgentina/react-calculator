import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;
  return (
    <button type="button" className={`${color} ${wide}`} onClick={() => clickHandler(name)}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
