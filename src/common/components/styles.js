import styled, { keyframes } from "styled-components";
import { screenDimensions } from "../globalStyles";

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

export const ArrowBtnContainer = styled.div`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  :hover {
    width: 100px;
  }
`;

export const BtnHoverText = styled.div`
  display: none;
  white-space: nowrap;
  margin-right: 5px;
  color: rgb(255, 146, 104);
  font-size: 18px;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  ${ArrowBtnContainer}:hover & {
    display: flex;
    transform: translateX(-105%);
    background-color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
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
  padding: 10px 12px;
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
