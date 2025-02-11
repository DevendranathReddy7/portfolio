import React, { useEffect, useState } from "react";
import { AboutContainer, P } from "./styles";
import portfolioConstants from "../../common/constants";
import Skills from "./Skills";
import WantToKnowMore from "../../common/components/WantToKnowMore/WantToKnowMore";

const About = (props) => {
  const [initalLoad, setInitialLoad] = useState(false);
  const [showResume, setShowResume] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setInitialLoad(true);

    setTimeout(() => {
      setShowResume(true);
    }, 3000);
  }, []);

  return (
    <AboutContainer>
      <P animation={initalLoad}>{portfolioConstants.ABOUT_ME}</P>
      {showResume && <WantToKnowMore />}
      <Skills />
    </AboutContainer>
  );
};
export default About;
