import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ArrowBtnContainer, BtnHoverText } from "./styles";
import { Link } from "react-router-dom";

const ArrowBtn = ({ text, navigateTo }) => {
  return (
    <Link to={navigateTo} style={{ textDecoration: "none" }}>
      <ArrowBtnContainer>
        <BtnHoverText>{text}</BtnHoverText>

        <FaArrowRight color="rgb(255, 146, 104)" />
      </ArrowBtnContainer>
    </Link>
  );
};
export default ArrowBtn;
