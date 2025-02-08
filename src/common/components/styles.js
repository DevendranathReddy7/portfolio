import styled from "styled-components";

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

// export const BtnHoverText = styled.div`
//   display: none;
//   white-space: nowrap;
//   margin-right: 5px;

//   ${ArrowBtnContainer}:hover & {
//     display: flex;
//   }
// `;
