import styled from "styled-components";
import { motion } from "framer-motion";
import { screenDimensions } from "../../globalStyles";

export const Card = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  margin-bottom: 2%;
  font-size: 200%;
  align-items: center;
  font-weight: bold;
  background: linear-gradient(45deg, #ff00ff, #c71585, #8a2be2);

  @media (max-width: ${screenDimensions.mobile}) {
    flex-direction: column;
    font-size: 18px;
  }
`;
