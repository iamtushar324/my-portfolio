import styled from 'styled-components';
import { baseColor } from 'styles/base';
import { Intro, Exp } from 'containers';

export default function App() {
  return (
    <MainWrapper>
      <Intro />
      <Exp />
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
