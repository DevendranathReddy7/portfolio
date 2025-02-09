import styled from "styled-components";

export const ArrowBtnContainer = styled.div`
  background-color: #131315;
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
