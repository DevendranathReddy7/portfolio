import styled from "styled-components";
import { screenDimensions } from "../../../common/globalStyles";

export const ProjectContainer = styled.div`
  margin-top: 1%;
`;

export const Project = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${screenDimensions.tablet}) {
    flex-wrap: wrap;
  }
`;

export const Img = styled.div`
  margin: 1% 2%;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 60%;
  width: 95%;
  @media (max-width: ${screenDimensions.tablet}) {
    top: 70%;
  }
`;

export const P = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "General Sans Semibold", sans-serif;
  line-height: 100%;
  padding: 7px;
`;

export const RecentWorksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1% 5%;
  @media (max-width: ${screenDimensions.tablet}) {
    flex-direction: column;
  }
`;

export const RecentWorksImg = styled.img`
  border-radius: 15px;
  width: 40%;
  @media (max-width: ${screenDimensions.tablet}) {
    width: 80%;
    margin: 0% 4%;
    align-items: center;
  }
`;
export const RecentWorksDescription = styled.div`
  width: 50%;
  @media (max-width: ${screenDimensions.tablet}) {
    width: 100%;
  }
`;

export const Id = styled.p`
  line-height: 32px;
  letter-spacing: 1.2px;
  color: #c4c4c4;
  font-weight: bold;
  letter-spacing: 1.9;
  @media (max-width: ${screenDimensions.tablet}) {
    display: none;
  }
`;

export const Title = styled.p`
  font-family: "General Sans Semibold", sans-serif;
  text-align: center;
  margin: 0% 2%;
  color: #131315;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-family: "General Sans Regular", sans-serif;
`;

export const Tech = styled.p`
  font-family: "General Sans Semibold", sans-serif;
  font-weight: bold;
`;
