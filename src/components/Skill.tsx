import styled from 'styled-components';
import SampleIcon from 'assets/react-icon.png';
import { baseColor, baseStyle } from 'styles/base';

export default function Skill({ icon = SampleIcon, name = ' ' }) {
  return (
    <MainWrapper>
      <Icon src={icon} alt=" " />
      <Title>{name}</Title>
      <DetailsBox>
        <Head>Recently used in these projects </Head>
        <ul>
          <li>
            <Link
              href={'http://selfpaced.in'}
              target="_blank"
              rel="noreferrer noopener"
            >
              Selfpaced.in
            </Link>
            {' - '}
            <Link
              href={'https://github.com/nimit05/selfPaced_Frontend'}
              target="_blank"
              rel="noreferrer noopener"
            >
              (Github)
            </Link>
          </li>
          <li>
            <Link
              href={'http://accusafe.net.in'}
              target="_blank"
              rel="noreferrer noopener"
            >
              Accute Accountings
            </Link>
            {' - '}
            <Link
              href={
                'https://github.com/accuteAccountings/frontend_accute_web'
              }
              target="_blank"
              rel="noreferrer noopener"
            >
              (Github)
            </Link>
          </li>
        </ul>
      </DetailsBox>
    </MainWrapper>
  );
}
// Const
const borderRadius = '10px';

// Styles

const Head = styled.h1`
  font-size: calc(${baseStyle.subTextFont} - 3px);
  font-weight: 300;
  color: ${baseColor.onSurface};
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: ${baseColor.secondary};
`;

const MainWrapper = styled.div`
  background-color: ${baseColor.surface};
  width: 130px;
  text-align: center;
  padding: 20px 10px;
  border-radius: ${borderRadius};
  margin: 50px 40px;
  position: relative;
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.5);
    z-index: 10;

    div {
      display: block;
    }
  }
`;
const Icon = styled.img`
  height: 80px;
  object-fit: cover;
  max-width: 100%;
`;

const Title = styled.h2``;

const DetailsBox = styled.div`
  position: absolute;
  top: 0px;
  right: -195px;
  background-color: ${baseColor.surface};
  width: 210px;
  height: 100%;
  border-radius: ${borderRadius};
  display: none;
  font-size: calc(${baseStyle.smallTextFont} - 3px);
  padding: 10px 5px;
  box-sizing: border-box;
  text-align: left;
`;
