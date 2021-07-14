import React from 'react';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Math-magicians calculator
      </p>
    </header>
    <>
      <Display result="0" />
      <ButtonPanel />
    </>
  </div>
);

export default App;
