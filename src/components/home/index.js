import { useState, useEffect } from "react";
import { HomeContainer, H1, P, ButtonContainer, Button } from "./styles";
import portfolioConstants from "../../common/constants";
import ArrowBtn from "../../common/components/ArrowBtn";

const Home = () => {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  return (
    <HomeContainer>
      <H1 animation={initialLoad}>{portfolioConstants.TITLE}</H1>
      <P animation={initialLoad}>{portfolioConstants.SUMMARY}</P>
      <ButtonContainer>
        <Button animation={initialLoad}>
          {portfolioConstants.CONTACT_BTN}
          <ArrowBtn text="Contact Me" />
        </Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
