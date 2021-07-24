import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <h1>Math Magicians</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </>
);
export default NavBar;
