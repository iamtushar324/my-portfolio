import styled from 'styled-components'

export default function App() {
return (
  <MainWrapper>
    <Title> Hello World</Title>
    </MainWrapper>
  )
}
// Styles

const MainWrapper = styled.div`
height:100vh;
width:100vw;
padding:20vh 0;
`
const Title = styled.h1`
text-align:center;
`

