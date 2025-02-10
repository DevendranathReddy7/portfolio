import styled, { keyframes } from "styled-components";
import { screenDimensions } from "../../common/globalStyles";
import { IoMdContact } from "react-icons/io";

const slideUp = keyframes`
  from {
    transform: translateY(5%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  background-color: #131315;
  margin: -2% 5% 1% 5%;
  width: 90%;
  min-height: 100vh;
  border-radius: 40px;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 500%;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  line-height: 100%;
  padding: 7% 7% 0% 7%;
  margin-bottom: -0.5%;
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;

  @media (max-width: ${screenDimensions.mobile}) {
    font-size: 200%;
  }
`;

export const P = styled.p`
  color: #c4c4c4;
  width: 80%;
  font-family: "General Sans Semibold", sans-serif;
  padding: 0% 10% 0.5% 10%;
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;
`;

export const Headers = styled.p`
  font-family: "General Sans Regular", sans-serif;
  text-align: start;
  margin: 1% 2% 0%;
  color: #bcbcc2;
  line-height: 32px;
  letter-spacing: 7.2px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${screenDimensions.mobile}) {
    flex-direction: column;
    padding: 5%;
  }
`;
export const AboutPara = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #131315;
  font-family: "General Sans Semibold", sans-serif;
  margin: 0% 5%;
  font-size: 26px;
  line-height: 120%;
  text-align: right;
  @media (max-width: ${screenDimensions.tablet}) {
    flex-direction: column;
    text-align: left;
    font-size: 18px;
    line-height: 120%;
  }
`;
export const ContactIcon = styled(IoMdContact)`
  width: 2300px;
  height: 620px;
  color: rgb(229, 92, 31);

  @media (max-width: ${screenDimensions.desktop}) {
    display: none;
  }
`;
