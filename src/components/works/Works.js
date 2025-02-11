import React, { useEffect, useState } from "react";
import {
  WorksContainer,
  TitleContainer,
  P,
  ArrowDiv,
  Description,
  TitleDiv,
  Title,
} from "./style";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdArrowOutward,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";

import parse from "html-react-parser";
import { recentWorks } from "../../common/worksConstants";
import WantToKnowMore from "../../common/components/WantToKnowMore/WantToKnowMore";

const Works = () => {
  const [currentWork, setCurrentWork] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setShowResume(true);
    }, 3000);
  }, []);

  const handleUrlClick = (url) => {
    window.open(url, "_blank");
  };

  const handlePrevBack = (direction) => {
    setCurrentWork((prev) => {
      if (direction === "prev") {
        return prev === 0 ? recentWorks.length - 1 : prev - 1; // Go to last if at first
      } else {
        return prev === recentWorks.length - 1 ? 0 : prev + 1; // Go to first if at last
      }
    });
  };

  if (recentWorks.length === 0) return null;

  const work = recentWorks[currentWork];

  return (
    <>
      <WorksContainer>
        <TitleContainer>
          <P>Recent Works</P>
          <ArrowDiv>
            <MdKeyboardArrowLeft
              size={30}
              color="#bcbcc2"
              onClick={() => handlePrevBack("prev")}
            />
            <MdKeyboardArrowRight
              size={30}
              color="#bcbcc2"
              onClick={() => handlePrevBack("next")}
            />
          </ArrowDiv>
        </TitleContainer>
        <Description>
          <div>
            <TitleDiv>
              <Title href={work.url} target="_blank">
                {work.name}
              </Title>
              <MdArrowOutward
                size={30}
                onClick={() => handleUrlClick(work.url)}
              />
            </TitleDiv>
            <p>{parse(work.description)}</p>
          </div>
        </Description>
        {recentWorks.map((work, index) => (
          <GoDotFill
            color={index === currentWork ? "rgb(229, 92, 31)" : "black"}
          />
        ))}
      </WorksContainer>
      <div style={{ width: "90%", margin: "0% 4%" }}>
        {showResume && <WantToKnowMore />}
      </div>
    </>
  );
};

export default Works;
