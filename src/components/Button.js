import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <button type="button" className="btn btn-default" onClick={() => clickHandler(name)}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
