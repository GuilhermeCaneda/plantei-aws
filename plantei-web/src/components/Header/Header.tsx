import "./Header.css";
import NavBar from "@Components/Header/components/NavBar/NavBar";
import LoginButton from "@Components/Header/components/LoginButton/LoginButton";
import ImgLogo from "@Assets/header/header-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
          <img src={ImgLogo} alt="Logo do WebSite" />
          </Link>
        </div>
        <NavBar />
        <div className="header-login-button">
        <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
