import styled from "styled-components";
import { screenDimensions } from "../../common/globalStyles";

export const DesktopLayout = styled.div`
  @media (max-width: ${screenDimensions.mobile}) {
    display: none;
  }
  display: flex;
  justify-content: space-around;
  margin: 1.5% 20% 0% 20%;
  align-items: center;
`;

export const MobileLayout = styled.div`
  @media (min-width: ${screenDimensions.mobile}) {
    display: none;
  }
`;

export const LinkPara = styled.p`
  color: black;
  font-size: 16px;
  font-family: "General Sans Semibold", sans-serif;
  font-weight: bold;
`;

export const MobileInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5% 4%;
`;
