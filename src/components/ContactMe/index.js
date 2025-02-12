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
  const [isLoading, setisLoading] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(false);
  const [apiError, setApiError] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setApiSuccess(false);
    }, 3000);
  }, [apiSuccess]);

  const changeHandler = (event, field) => {
    const value = event.target.value;
    setApiSuccess(false);
    setApiError(false);
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
    if (!name || !email || !companyName || !message || !validEmail) {
      setError(true);
    } else {
      setisLoading(true);
      const sendMail = await fetch(
        `https://devendranathreddyportfolio.onrender.com/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, companyName, message }),
        }
      );

      const resp = await sendMail.json();
      if (resp.status === "success") {
        setApiSuccess(true);
        setName("");
        setEmail("");
        setComapyName("");
        setMessage("");
      } else {
        setApiError(true);
      }
      setisLoading(false);
    }
  };

  const showAPISuccess = () => {
    return (
      <ResponseContainer>
        <TiTickOutline color="green" size={30} />
        <p style={{ color: "green" }}> Email Sent successfully!</p>
      </ResponseContainer>
    );
  };

  const showAPIError = () => {
    <ResponseContainer>
      <RxCross1 color="red" size={25} />
      <p style={{ color: "red" }}>
        Error While Sending an Email..Please try again!
      </p>
    </ResponseContainer>;
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
          {isLoading && (
            <p style={{ color: "rgb(229, 92, 31)" }}>
              Please wait while we are sending your Email!
            </p>
          )}
          {apiSuccess && showAPISuccess()}
          {apiError && showAPIError()}
          <Button
            disabled={
              !name ||
              !email ||
              !companyName ||
              !message ||
              !validEmail ||
              isLoading
            }
          >
            {isLoading ? "Sending 🚀" : "Submit"}
          </Button>
        </form>
      </ContentDiv>
    </ContactContainer>
  );
};

export default ContactMe;
