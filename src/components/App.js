import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Math-magicians calculator
        </p>
      </header>
      <>
        <Display />
        <ButtonPanel />
      </>
    </div>
  );
}

export default App;
