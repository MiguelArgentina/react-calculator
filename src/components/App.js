import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

import '../resets.css';
import '../styles.css';

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
    <div className="App">
      <header className="App-header" />
      <div className="calc-wrapper">
        <Display operation={operation} result={next || total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
