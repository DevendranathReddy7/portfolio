import styled from "styled-components";
import { screenDimensions } from "../../common/globalStyles";
import { IoMdContact } from "react-icons/io";

export const FooterContainer = styled.div`
  background-color: #131315;
  margin: -2% 5% 1% 5%;
  width: 90%;
  border-radius: 40px;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 500%;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  line-height: 100%;
  padding: 7% 7% 0% 7%;
  margin-bottom: 5%;

  @media (max-width: ${screenDimensions.mobile}) {
    font-size: 200%;
  }
`;

export const HR = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, #ff5722, #ff9800);
  width: 90%;
  margin-top: 2%;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5% 3%;

  @media (max-width: ${screenDimensions.mobile}) {
    flex-direction: column;
    align-content: space-around;
  }
`;

export const IconDiv = styled.div`
  width: 20%;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;

  @media (max-width: ${screenDimensions.mobile}) {
    width: 100%;
  }
`;

export const ContactIcon = styled(IoMdContact)`
  width: 230px;
  height: 220px;
  color: rgb(229, 92, 31);

  @media (max-width: ${screenDimensions.desktop}) {
    width: 120px;
    height: 120px;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-self: center;
  @media (max-width: ${screenDimensions.mobile}) {
    width: 100%;
  }
`;

export const Headers = styled.p`
  font-family: "General Sans Semibold", sans-serif;
  font-weight: bold;
  text-align: start;
  margin: 1% 2% 0%;
  color: #bcbcc2;
  line-height: 32px;
  letter-spacing: 1.2px;
`;

export const LinkPara = styled.p`
  color: white;
  font-size: 16px;
  font-family: "General Sans Semibold", sans-serif;
`;

export const TC = styled.h5`
  color: #acacac5e;
  font-size: 16px;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  padding-bottom: 2%;
  margin-bottom: 1%;
`;
