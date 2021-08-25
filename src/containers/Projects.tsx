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
            "Students can able to share their digital copy of class notes on this website. Used by 50 students to share and get latest subject notes for exams. Technogogies Used : - React , Nodejs , SASS , Image Compression ( Lossy )"
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
            "Developed a web application that helps business owners to track, process, and analyze their orders and goods with easy-to-use UI and Intuitive UX.\n- Managed, optimized, Secured, and updated Linux Servers for low latency and high availability. Helping more than 10 business owners in the biggest wholesale market of Delhi.Conducted Meetings for file structure, UX improvements, Security Issues, Bug Reporting, etc."
          }
          liveProject={'http://accusafe.net.in'}
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
