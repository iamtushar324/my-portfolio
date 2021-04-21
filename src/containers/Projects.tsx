import Project from 'components/Project';
import styled from 'styled-components';
import { baseColor, baseStyle } from 'styles/base';

const data = [
  { title: 'selfpaced' },
  { title: 'selfpace' },
  { title: 'selfpaced' },
];

export default function Projects() {
  return (
    <MainWrapper>
      <Heading>Projects</Heading>
      <ProjectsWrapper>
        {data &&
          data.map((e, i) => {
            return <Project key={i} index={i + 1} />;
          })}
      </ProjectsWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  padding: 40px 0;
`;

const Heading = styled.h1`
  font-size: ${baseStyle.mainHeadingFont};
  color: ${baseColor.onBackground};
  margin: 60px 0px;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
