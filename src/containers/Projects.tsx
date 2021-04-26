import Project from 'components/Project';
import styled from 'styled-components';
import { baseColor, baseStyle } from 'styles/base';

export default function Projects() {
  return (
    <MainWrapper>
      <Heading>Projects</Heading>
      <ProjectsWrapper>
        <Project
          index={0}
          heading={'Seflpaced.in'}
          subHeading={'A PDF Sharing Website'}
          para={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          liveProject={'http://selfpaced.in'}
          githubProject={
            'https://github.com/nimit05/selfPaced_Frontend'
          }
          mainImg={'./assets/selfpaced-desktop.png'}
          phoneImg={'./assets/selfpaced-phone.png'}
          noMobile={false}
        />
        <Project
          index={1}
          heading={'Accute Accountings'}
          subHeading={'Accounting Software for Wholesale Bussiness'}
          para={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          liveProject={'http://accute.live'}
          githubProject={
            'https://github.com/accuteAccountings/frontend_accute_web'
          }
          noMobile={true}
          mainImg={'./assets/accute.png'}
        />
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
