import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactIcon,
  H1,
  ContentDiv,
  Button,
  Input,
  TextArea,
  ErrorP,
} from "./styles";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Fixed typo
  const [error, setError] = useState(false);
  const [validEmail, setValidEmail] = useState(true); // Default to true (invalid state)

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
    if (!name || !email || !message || !validEmail) {
      setError(true);
    } else {
      const sendMail = await fetch(`http://localhost:5000/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const resp = await sendMail.json();
      console.log(resp);
    }
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
          <TextArea
            placeholder="Message"
            value={message}
            onChange={(e) => changeHandler(e, "message")}
          />
          {error && <ErrorP>All fields are mandatory!</ErrorP>}
          {!validEmail && <ErrorP>Please enter a valid email!</ErrorP>}

          <Button disabled={!name || !email || !message || !validEmail}>
            Submit
          </Button>
        </form>
      </ContentDiv>
    </ContactContainer>
  );
};

export default ContactMe;
