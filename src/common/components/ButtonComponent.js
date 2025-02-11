import React from "react";
import { Button, ButtonContainer } from "./styles";
import ArrowBtn from "./ArrowBtn";
import portfolioConstants from "../constants";

// this is contact me button component
const ButtonComponent = ({ initialLoad, text, navigateTo }) => {
  return (
    <ButtonContainer>
      <Button animation={initialLoad}>
        {portfolioConstants.BUTTON_TEXTS[text]}
        <ArrowBtn
          text={portfolioConstants.BUTTON_TEXTS[text]}
          navigateTo={navigateTo}
        />
      </Button>
    </ButtonContainer>
  );
};
export default ButtonComponent;
