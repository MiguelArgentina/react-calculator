import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <button type="button" className={`btn bg-warning p-1 btn-default ${name === '=' ? 'w-50' : 'w-25'}  border border-info`} onClick={() => clickHandler(name)}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
