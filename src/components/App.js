import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './NavBar';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';
import NotFound from './NotFound';
import '../resets.css';
import '../styles.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <div className="App">
        <header className="App-header" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
