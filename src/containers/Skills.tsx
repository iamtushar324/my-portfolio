import { Skill } from 'components';
import styled from 'styled-components';
import { baseColor, baseStyle } from 'styles/base';

export default function Skills() {
  return (
    <MainWrapper>
      <Heading>Skills</Heading>
      <SkillWrapper>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </SkillWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  border-bottom: 1px solid ${baseColor.surface};
  padding-bottom: 40px;
`;
const Heading = styled.h1`
  font-size: ${baseStyle.mainHeadingFont};
  color: ${baseColor.onBackground};
  margin: 60px 0px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
