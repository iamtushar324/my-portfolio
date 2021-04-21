import styled from 'styled-components';
import { baseColor } from 'styles/base';
import { Intro, Exp, Skills } from 'containers';
import Projects from 'containers/Projects';

export default function App() {
  return (
    <MainWrapper>
      <Intro />
      <Exp />
      <Skills />
      <Projects />
    </MainWrapper>
  );
}

// Styles

const MainWrapper = styled.div`
  width: 70vw;
  padding: 0 15vw;
  background-color: ${baseColor.background};
  color: ${baseColor.onBackground};
`;
