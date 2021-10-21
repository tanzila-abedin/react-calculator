import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/Wrapper">Calculator</Link>
      <Link to="/Quote">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
