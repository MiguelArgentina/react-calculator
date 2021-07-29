import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <div className="button-panel-wrapper">
      <div className="btn-row group-1">
        <Button name="AC" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="+/-" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="%" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="÷" color="btn-ope" wide="not-btn-eq" clickHandler={handleClick} />
      </div>
      <div className="btn-row group-2">
        <Button name="7" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="8" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="9" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="x" color="btn-ope" wide="not-btn-eq" clickHandler={handleClick} />
      </div>
      <div className="btn-row group-3">
        <Button name="4" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="5" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="6" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="-" color="btn-ope" wide="not-btn-eq" clickHandler={handleClick} />
      </div>
      <div className="btn-row group-4">
        <Button name="1" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="2" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="3" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="+" color="btn-ope" wide="not-btn-eq" clickHandler={handleClick} />
      </div>
      <div className="btn-row group-5">
        <Button name="0" color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="." color="btn-oth" wide="not-btn-eq" clickHandler={handleClick} />
        <Button name="=" color="btn-oth" wide="btn-eq" clickHandler={handleClick} />
      </div>

    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
