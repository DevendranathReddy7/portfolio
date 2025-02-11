import React, { useState, useEffect } from "react";
import { HomeContainer, H1, P, Headers, AboutPara, ButtonsDiv } from "./styles";
import portfolioConstants from "../../common/constants";
import Projects, { RecentWorks } from "./Projects";
import ButtonComponent from "../../common/components/ButtonComponent";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import WantToKnowMore from "../../common/components/WantToKnowMore/WantToKnowMore";

const Home = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [showResume, setShowResume] = useState(false);
  useEffect(() => {
    setInitialLoad(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setShowResume(true);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <HomeContainer>
        <H1 animation={initialLoad}>{portfolioConstants.TITLE}</H1>
        <P animation={initialLoad}>{portfolioConstants.SUMMARY}</P>
        <ButtonsDiv>
          <Link to="/contact-me" style={{ textDecoration: "none" }}>
            <ButtonComponent
              initialLoad={initialLoad}
              text="contactMe"
              navigateTo="/contact-me"
            />
          </Link>
          <a
            href="/DevendranathReddy_ReactJs_Developer.pdf"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <ButtonComponent initialLoad={initialLoad} text="viewResume" />
          </a>
        </ButtonsDiv>
        <Projects />
      </HomeContainer>
      <Headers>ABOUT ME</Headers>
      <AboutPara>
        <a
          href="/DevendranathReddy_ReactJs_Developer.pdf"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <ButtonComponent initialLoad={initialLoad} text="viewResume" />
        </a>
        {parse(portfolioConstants.ABOUT.replace(/\n/g, "<br/>"))}
      </AboutPara>

      <Headers>PROJECTS</Headers>
      <RecentWorks />
      <div style={{ width: "90%", margin: "0% 5%" }}>
        {showResume && <WantToKnowMore />}
      </div>
    </React.Fragment>
  );
};

export default Home;
