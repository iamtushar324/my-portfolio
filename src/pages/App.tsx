import styled from 'styled-components'
import {Button} from 'components'
import { baseColor } from 'styles/base'

export default function App() {
return (
  <MainWrapper>
    <Title> Hello World</Title>
    <Button type="pri" size="large">
      Hello You
      </Button>
    </MainWrapper>
  )
}

// Styles

const MainWrapper = styled.div`
height:100vh;
width:100vw;
padding:20vh 0;
background-color:${baseColor.background};
color:${baseColor.onBackground};
`
const Title = styled.h1`
text-align:center;
`
