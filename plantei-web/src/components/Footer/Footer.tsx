import "./Footer.css";
import ImgLogo from "@Assets/footer/LogoFooter.svg";
import ImgBgFooter from "@Assets/footer/footerBackground.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-background" src={ImgBgFooter} alt="" />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-info">
            <h4>Stay Fresh</h4>
            <p>compassinhos@gmail.com</p>
            <p>+55 41 99999-9999</p>
          </div>
          <div className="footer-container-links">
            <div className="footer-links">
              <p>Links</p>
              <ul className="ul-footer">
                <Link to="/about-us">
                  <li className="li-footer">About us</li>
                </Link>
                <Link to="/products">
                  <li className="li-footer">Products</li>
                </Link>
                <Link to="/blogs">
                  <li className="li-footer">Blogs</li>
                </Link>
              </ul>
            </div>
            <div className="footer-links">
              <p>Community</p>
              <ul className="ul-footer">
                <Link to="/about-us">
                  <li className="li-footer">About us</li>
                </Link>
                <Link to="/products">
                  <li className="li-footer">Products</li>
                </Link>
                <Link to="/blogs">
                  <li className="li-footer">Blogs</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-row">
          <Link to="/">
            <img src={ImgLogo} alt="Logo plant peace" />
            </Link>
            <div>
              <p> Compassinhos ©. All rights</p>
              <p>reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
