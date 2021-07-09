import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <button type="button" className="btn btn-default">
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
