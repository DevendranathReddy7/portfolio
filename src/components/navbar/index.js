import { Link } from "react-router-dom";
import { DesktopLayout, LinkPara } from "./styles";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <DesktopLayout>
      <Link to="/home">
        <LinkPara>HOME</LinkPara>
      </Link>

      <Link to="/about">
        <LinkPara>ABOUT</LinkPara>
      </Link>

      <img src={logo} alt="logo" width={45} height={45} />

      <Link to="/works">
        <LinkPara>WORKS</LinkPara>
      </Link>
      <Link to="/contact">
        <LinkPara>CONTACT</LinkPara>
      </Link>
    </DesktopLayout>
  );
};

export default Navbar;
