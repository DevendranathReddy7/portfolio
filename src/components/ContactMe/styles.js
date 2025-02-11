import { IoMdContact } from "react-icons/io";
import styled from "styled-components";
import { screenDimensions } from "../../common/globalStyles";

export const ContactContainer = styled.div`
  background-color: #131315;
  margin: 1% 5%;
  width: 90%;
  min-height: 100vh;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2%;
  @media (max-width: ${screenDimensions.desktop}) {
    flex-direction: column;
  }
`;

export const ContentDiv = styled.div`
  width: 70%;
  @media (max-width: ${screenDimensions.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ContactIcon = styled(IoMdContact)`
  width: 230px;
  height: 620px;
  color: rgb(229, 92, 31);
  @media (max-width: ${screenDimensions.desktop}) {
    width: 120px;
    height: 120px;
  }
`;

export const H1 = styled.h1`
  color: white;
  font-size: 500%;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  line-height: 100%;
  padding: 2% 7% 0% 7%;
  margin-bottom: -0.5%;
  @media (max-width: ${screenDimensions.mobile}) {
    font-size: 200%;
  }
`;

export const Button = styled.button`
  appearance: none;
  display: inline-block;
  width: 84%;
  line-height: 1.4em;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-family: "General Sans Semibold", sans-serif;
  font-weight: bold;
  font-size: 16px;
  background: linear-gradient(
    180deg,
    rgb(255, 146, 104) 0%,
    rgb(249, 92, 31) 100%
  );
  color: rgb(0, 0, 0);
  box-shadow: transparent 0px 0px 0px 1px inset;
  margin-top: 3%;
  &:disabled {
    background: linear-gradient(to right, #e0e0e0, #d3d3d3);
    color: black;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  appearance: none;
  display: inline-block;
  width: 80%;
  line-height: 1.4em;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-family: "Inter Regular", Inter, Inter, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  font-size: 16px;
  background: rgb(235, 235, 235);
  color: rgb(0, 0, 0);
  box-shadow: transparent 0px 0px 0px 1px inset;
  margin-top: 3%;
`;

export const TextArea = styled.textarea`
  appearance: none;
  display: inline-block;
  width: 80%;
  line-height: 1.4em;
  outline: none;
  border: none;
  min-height: 0px;
  padding: 15px;
  resize: vertical;
  border-radius: 8px;
  background: rgb(235, 235, 235);
  font-family: "Inter Regular", Inter, Inter, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin-top: 3%;
`;

export const ErrorP = styled.p`
  color: red;
  margin: 0.5%;
`;
