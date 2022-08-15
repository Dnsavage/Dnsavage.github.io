import { skills } from "../data";
import { SkillsDescrContainer, SkillsHead, SkillsBody, SkillsSubContain, 
  SkillsSubHead, SkillsGrid, Skill, SkillTitle, SkillBG } from "./styles/Skills.styled";

export default function Skills() {
  return (
    <section id="skills">
      <SkillsDescrContainer>
        <SkillsHead>
          Skills and Technologies
        </SkillsHead>
        <SkillsBody>
          A big part of being a full-stack developer is the ability to learn and adapt as technologies evolve, 
          developing an ever-growing tool kit.
        </SkillsBody>
      </SkillsDescrContainer>
      <SkillsSubContain>
        <SkillsSubHead>My Tool Kit:</SkillsSubHead>
      </SkillsSubContain>
      <SkillsGrid>
        {skills.map((skill) => (
          <Skill key={skill.title}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillBG src={skill.image}/>
          </Skill>
        ))}
      </SkillsGrid>
    </section>
  );
}