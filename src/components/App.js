import React from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '0',
      operation: null,
    };

    this.handleClick = (btnName) => {
      this.setState((prevState) => calculate(prevState, btnName));
    };
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="App col-12 col-md-4">
        <header className="App-header">
          <p className="text-center font-weight-bold text-primary pt-2">
            Math-magicians calculator
          </p>
        </header>
        <div className="">
          <Display operation={operation} result={next || total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
