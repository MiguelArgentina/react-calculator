import NavBar from './NavBar';

import '../resets.css';
import '../styles.css';
import Calculator from './Calculator';

const App = () => (
  <div>
    <NavBar />
    <div className="App">
      <header className="App-header" />
      <Calculator />
    </div>
  </div>
);

export default App;
