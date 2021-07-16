import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div className="border border-info bg-warning text-primary text-right px-1">
      { result }
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
