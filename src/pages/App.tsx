import styled from 'styled-components';
import { baseColor } from 'styles/base';
import { Intro } from 'containers';

export default function App() {
  return (
    <MainWrapper>
      <Intro />
      <div id="m"></div>
    </MainWrapper>
  );
}

// Styles

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 0;
  background-color: ${baseColor.background};
  color: ${baseColor.onBackground};
`;
