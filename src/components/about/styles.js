import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
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

export const AboutContainer = styled.div`
  width: 90%;
  margin: 1% 5%;
  font-family: sans-serif;
  line-height: 150%;
`;

export const P = styled.p`
  animation: ${(props) => (props.animation ? slideUp : "none")} 2s ease-in-out
    forwards;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const MainContainer = styled.div`
  background: #f8f9fa;
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  grid-template-rows: auto auto; /* Two rows */
  gap: 25px;
  padding: 20px;

  /* First card: Takes the entire height of the first column */
  & > :nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  /* Second card: First row, second column */
  & > :nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  /* Third card: Second row, second column */
  & > :nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  /* Fourth card: Takes the entire width of both columns */
  & > :nth-child(4) {
    grid-column: 1 / 3; /* Spans from column 1 to column 2 */
    grid-row: 3 / 4; /* Moves it below all other elements */
  }

  @media (max-width: ${screenDimensions.mobile}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CategoryCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  text-align: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const SkillList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SkillCard = styled.div`
  min-width: 140px;
  height: 70px;
  background: white;
  color: #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  gap: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;
