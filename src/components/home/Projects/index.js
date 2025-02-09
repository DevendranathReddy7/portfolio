import React from "react";
import {
  ProjectContainer,
  Project,
  Img,
  Content,
  P,
  RecentWorksContainer,
  RecentWorksImg,
  RecentWorksDescription,
  Id,
  Title,
  Description,
  Tech,
} from "./styles";

import todo_image from "../../../images/todo_image.png";
import youtube_clone from "../../../images/youtube_clone.png";
import mood_tracker from "../../../images/mood_tracker.png";
import ArrowBtn from "../../../common/components/ArrowBtn";

const projects = [
  {
    id: "01",
    img: todo_image,
    alt: "todo_list",
    title: "Tasks List",
    name: "Task-Items (MERN App)",
    description:
      "A task management web application built with MongoDB, Express, React, and Node.js. Features include user authentication, task creation, editing, deletion, and real-time updates, ensuring a seamless and productive workflow.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "02",
    img: youtube_clone,
    alt: "youtube_clone",
    title: "Youtube Clone",
    name: "NxtWatch (YouTube Clone - React)",
    description:
      "A fully responsive video streaming platform inspired by YouTube, developed using React, React Router, and Context API. Supports protected routes, dark mode, trending videos, gaming section, and a saved videos list, delivering an immersive user experience.",
    technologies: ["React", "React Router", "Redux", "Context API"],
  },
  {
    id: "03",
    img: mood_tracker,
    alt: "mood_tracker",
    title: "Mood Tracker",
    name: "Mood Tracker (React Web App)",
    description:
      "A personalized mood tracking application built with React and Context API. Users can log daily emotions, filter by date, and analyze trends using an intuitive and interactive interface, promoting mindfulness and self-awareness.",
    technologies: ["React", "Redux", "Context API"],
  },
];

const Projects = (props) => {
  return (
    <ProjectContainer>
      <Project>
        {projects.map((prj) => (
          <Img>
            <img
              src={prj.img}
              alt={prj.alt}
              width="100%"
              style={{ borderRadius: "15px" }}
            />
            <Content>
              <P>{prj.title}</P>
              <ArrowBtn text="Go to Project" navigateTo="/works" />
            </Content>
          </Img>
        ))}
      </Project>
    </ProjectContainer>
  );
};

export const RecentWorks = () => {
  return (
    <React.Fragment>
      {projects.map((project) => {
        const { id, img, title, name, description, technologies } = project;

        return (
          <RecentWorksContainer>
            <Id>{id}</Id>
            <RecentWorksImg src={img} alt={title} />
            <RecentWorksDescription>
              <Title>{name}</Title>
              <Description>{description}</Description>
              <Tech>Tech Stack's: {technologies.join(", ")}</Tech>
            </RecentWorksDescription>
          </RecentWorksContainer>
        );
      })}
    </React.Fragment>
  );
};
export default Projects;
