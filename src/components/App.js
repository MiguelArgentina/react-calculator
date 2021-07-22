import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  const calcData = {
    total: null,
    next: '0',
    operation: null,
  };
  const [data, setData] = useState(calcData);

  const handleClick = (btnName) => setData((data) => calculate(data, btnName));

  const { next, total, operation } = data;
  return (
    <div className="App col-12 col-md-4">
      <header className="App-header">
        <p className="text-center font-weight-bold text-primary pt-2">
          Math-magicians calculator
        </p>
      </header>
      <div className="">
        <Display operation={operation} result={next || total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
