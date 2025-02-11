import React from "react";
import { Card } from "./styles";
import ButtonComponent from "../ButtonComponent";

const WantToKnowMore = (props) => {
  return (
    <Card
      initial={{ opacity: 0, x: -0 }} // Slide from left
      animate={{ opacity: 1, x: 10 }} // Move to original position
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p>Want to know More?</p>
      <a
        href="/DevendranathReddy_ReactJs_Developer.pdf"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <ButtonComponent text="viewResume" />
      </a>
    </Card>
  );
};
export default WantToKnowMore;
