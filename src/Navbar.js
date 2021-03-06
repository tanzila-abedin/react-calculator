import { Link } from 'react-router-dom';
import './style/index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Quote">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
