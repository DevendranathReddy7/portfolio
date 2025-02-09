import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  H1,
  P,
  Headers,
  AboutPara,
  ContactIcon,
} from "./styles";
import portfolioConstants from "../../common/constants";
import Projects, { RecentWorks } from "./Projects";
import ContactMe from "./ContactMe";
import parse from "html-react-parser";

const Home = () => {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  return (
    <React.Fragment>
      <HomeContainer>
        <H1 animation={initialLoad}>{portfolioConstants.TITLE}</H1>
        <P animation={initialLoad}>{portfolioConstants.SUMMARY}</P>
        <ContactMe initialLoad={initialLoad} />
        <Projects />
      </HomeContainer>
      <Headers>ABOUT ME</Headers>
      <AboutPara>
        <ContactIcon />
        {parse(portfolioConstants.ABOUT.replace(/\n/g, "<br/>"))}
      </AboutPara>

      <Headers>PROJECTS</Headers>
      <RecentWorks />
    </React.Fragment>
  );
};

export default Home;
