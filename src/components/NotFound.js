import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    The page you are looking for does not exit.
    <Link to="/">Back to home</Link>
  </div>
);

export default NotFound;
