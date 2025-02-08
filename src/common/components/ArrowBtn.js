import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ArrowBtnContainer } from "./styles";

const ArrowBtn = ({ text }) => {
  return (
    <ArrowBtnContainer>
      {/* <BtnHoverText>{text}</BtnHoverText> */}
      <FaArrowRight color="rgb(255, 146, 104)" />
    </ArrowBtnContainer>
  );
};
export default ArrowBtn;
