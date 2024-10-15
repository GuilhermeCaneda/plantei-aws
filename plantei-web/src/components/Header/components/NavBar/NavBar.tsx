import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  
  return (
    <nav className="header-nav">
      <ul className="header-ul">
        <li className="li-header">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li className="li-header">
          <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Link>
        </li>
        <li className="li-header">
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        </li>
        <li className="li-header">
          <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
