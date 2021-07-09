import React from 'react';
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
