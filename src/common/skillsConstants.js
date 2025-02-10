import {
  FaReact,
  FaJs,
  FaNode,
  FaPython,
  FaGitAlt,
  FaJira,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiBootstrap,
  SiWebpack,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiJest,
  SiMocha,
  SiChai,
  SiSonarqube,
  SiCypress,
} from "react-icons/si";

export const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Next.js", icon: <SiNextdotjs color="black" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Webpack", icon: <SiWebpack color="#8DD6F9" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNode color="#68A063" /> },
    { name: "MERN", icon: <FaNode color="#68A063" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
  ],
  Database: [
    { name: "MS-SQL", icon: <FaDatabase color="#CC2927" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Jira", icon: <FaJira color="#0052CC" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "CI/CD", icon: <SiCypress color="#17202A" /> },
    { name: "Jest", icon: <SiJest color="#C21325" /> },
    { name: "Mocha", icon: <SiMocha color="#8D6748" /> },
    { name: "Chai", icon: <SiChai color="#A30701" /> },
    { name: "SonarQube", icon: <SiSonarqube color="#4E9BCD" /> },
  ],
};
