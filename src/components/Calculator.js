import { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const Calculator = () => {
  const calcData = {
    total: null,
    next: '0',
    operation: null,
  };
  const [data, setData] = useState(calcData);
  const handleClick = (btnName) => setData((data) => calculate(data, btnName));
  const { next, total, operation } = data;
  return (
    <div className="mt-4d-block d-md-flex justify-content-between">
      <div className="calc-text my-3">Let´s do some math!</div>
      <div className="calc-wrapper">
        <Display operation={operation} result={next || total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};
export default Calculator;
