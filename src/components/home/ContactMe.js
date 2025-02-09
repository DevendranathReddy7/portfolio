import React from "react";
import { Button, ButtonContainer } from "./styles";
import ArrowBtn from "../../common/components/ArrowBtn";
import { Link } from "react-router-dom";
import portfolioConstants from "../../common/constants";

const ContactMe = ({ initialLoad }) => {
  return (
    <Link to="/contact-me" style={{ textDecoration: "none", color: "inherit" }}>
      <ButtonContainer>
        <Button animation={initialLoad}>
          {portfolioConstants.CONTACT_BTN}
          <ArrowBtn text="Contact Me" navigateTo="/contact-me" />
        </Button>
      </ButtonContainer>
    </Link>
  );
};
export default ContactMe;
