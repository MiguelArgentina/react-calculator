import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar mt-2 p-0">
    <h1 className="main-title">Math Magicians</h1>
    <div className="links-container">
      <Link to="/">Home</Link>
      <Link to="/calculator" className="mx-2 px-2 border border-secondary border-top-0 border-bottom-0">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);
export default NavBar;
