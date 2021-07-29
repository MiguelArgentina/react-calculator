import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div className="text-start home-para quote-para">
      The page you are looking for does not exist.
    </div>
    <p>
      <Link to="/" className="back-home-link">Back to home</Link>
    </p>
  </>
);

export default NotFound;
