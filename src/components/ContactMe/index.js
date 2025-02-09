import React from "react";
import {
  ContactContainer,
  ContactIcon,
  H1,
  ContentDiv,
  Button,
  Input,
  TextArea,
} from "./styles";

const ContactMe = (props) => {
  return (
    <ContactContainer>
      <ContactIcon />
      <ContentDiv>
        <H1>Let's Collaborate!</H1>
        <Input placeHolder="Name" />
        <Input placeHolder="Email" />
        <TextArea placeHolder="Message" />
        <Button>Submit</Button>
      </ContentDiv>
    </ContactContainer>
  );
};
export default ContactMe;
