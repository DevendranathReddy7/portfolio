import {
  MainContainer,
  Container,
  CategoryCard,
  CategoryTitle,
  SkillList,
  SkillCard,
} from "./styles";

import { skills } from "../../common/skillsConstants";
export default function Skills() {
  return (
    <MainContainer>
      <CategoryTitle>Skills</CategoryTitle>
      <Container>
        {Object.entries(skills).map(([category, skillList]) => (
          <CategoryCard
            key={category}
            initial={{ opacity: 0, y: 100 }} // Slide from left
            animate={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skillList.map((skill, index) => (
                <SkillCard key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </SkillCard>
              ))}
            </SkillList>
          </CategoryCard>
        ))}
      </Container>
    </MainContainer>
  );
}
