import { Link } from "react-router-dom";
import {
  DesktopLayout,
  MobileLayout,
  LinkPara,
  MobileInnerDiv,
} from "./styles";
import logo from "../../images/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showMenu]);
  return (
    <div>
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
        <Link to="/contact-me">
          <LinkPara>CONTACT</LinkPara>
        </Link>
      </DesktopLayout>

      <MobileLayout>
        <MobileInnerDiv>
          <img src={logo} alt="logo" width={45} height={45} />

          {!showMenu ? (
            <IoMdMenu
              color="rgb(255, 146, 104)"
              onClick={() => setShowMenu(true)}
              size={40}
            />
          ) : (
            <MdOutlineCancel
              color="rgb(255, 146, 104)"
              onClick={() => setShowMenu(false)}
              size={40}
            />
          )}
        </MobileInnerDiv>
        {showMenu && (
          <div onClick={() => setShowMenu(false)}>
            <Link to="/home">
              <LinkPara>HOME</LinkPara>
            </Link>
            <Link to="/about">
              <LinkPara>ABOUT</LinkPara>
            </Link>
            <Link to="/works">
              <LinkPara>WORKS</LinkPara>
            </Link>
            <Link to="/contact-me">
              <LinkPara>CONTACT</LinkPara>
            </Link>
          </div>
        )}
      </MobileLayout>
    </div>
  );
};

export default Navbar;
