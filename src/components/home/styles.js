import styled, { keyframes } from "styled-components";
import { screenDimensions } from "../../common/globalStyles";

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
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;
`;

export const P = styled.p`
  color: #c4c4c4;
  width: 80%;
  font-family: "General Sans Semibold", sans-serif;
  padding: 0% 10% 0.5% 10%;
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.button`
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;
  background: linear-gradient(
    180deg,
    rgb(255, 146, 104) 0%,
    rgb(249, 92, 31) 100%
  );
  border-style: none;
  border-radius: 50px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  color: white;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${screenDimensions.tablet}) {
    margin-bottom: 30px;
  }
`;
