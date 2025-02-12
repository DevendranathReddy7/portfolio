import React, { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

import {
  ContactContainer,
  ContactIcon,
  H1,
  ContentDiv,
  Button,
  Input,
  TextArea,
  ErrorP,
  ResponseContainer,
} from "./styles";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setComapyName] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const [apiResponse, setApiResponse] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const changeHandler = (event, field) => {
    const value = event.target.value;

    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setValidEmail(emailRegex.test(value)); // Validate the input value
        break;
      case "companyName":
        setComapyName(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    setError(false); // Reset error on change
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiResponse(false);
    if (!name || !email || !companyName || !message || !validEmail) {
      setError(true);
    } else {
      const sendMail = await fetch(`http://localhost:5000/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, companyName, message }),
      });

      const resp = await sendMail.json();
      if (resp.status === "success") {
        setApiResponse(true);
        setName("");
        setEmail("");
        setComapyName("");
        setMessage("");
      } else {
        setApiResponse(false);
      }
    }
  };

  const showAPIResponse = () => {
    return (
      <React.Fragment>
        {apiResponse ? (
          <ResponseContainer>
            <TiTickOutline color="green" size={30} />
            <p style={{ color: "green" }}> Email Sent successfully!</p>
          </ResponseContainer>
        ) : (
          <ResponseContainer>
            <RxCross1 color="red" size={25} />
            <p style={{ color: "red" }}>
              Error While Sending an Email..Please try again!
            </p>
          </ResponseContainer>
        )}
      </React.Fragment>
    );
  };

  return (
    <ContactContainer>
      <ContactIcon />
      <ContentDiv>
        <H1>Let's Collaborate!</H1>
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => changeHandler(e, "name")}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => changeHandler(e, "email")}
          />
          <Input
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => changeHandler(e, "companyName")}
          />
          <TextArea
            placeholder="Message"
            value={message}
            onChange={(e) => changeHandler(e, "message")}
          />
          {error && <ErrorP>All fields are mandatory!</ErrorP>}
          {!validEmail && <ErrorP>Please enter a valid email!</ErrorP>}
          {showAPIResponse()}
          <Button
            disabled={
              !name || !email || !companyName || !message || !validEmail
            }
          >
            Submit
          </Button>
        </form>
      </ContentDiv>
    </ContactContainer>
  );
};

export default ContactMe;
