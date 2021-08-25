import styled from 'styled-components';
import { baseColor, baseStyle } from 'styles/base';
import CudyIcon from 'assets/cudy_icon.png';

export default function Exp() {
  return (
    <MainWrapper>
      <Heading>Experience</Heading>
      <TimelineWrapper>
        <LeftSide>
          <ExpWrapper index={0}>
            <Date>Aug 2020</Date>
            <Dot />
          </ExpWrapper>
          <ExpWrapper index={1}>
            <Date>Nov 2020</Date>
            <Dot />
          </ExpWrapper>
          <ContentWrapperLeft index={1}>
            <Title>
              <Icon src={CudyIcon} />
              Cudy Technologies
            </Title>
            <Position>Full-Stack Developer (Intern)</Position>
            <Description>
              Deployed New Services
              <br />
              <br />
              Technologies used :- React , Node , Ant Design , Graphql
              , Styled-Components , SQL , MongoDb
            </Description>
            <Link
              href={'https://cudy.co'}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Website
            </Link>
          </ContentWrapperLeft>
          <ExpWrapper index={4}>
            <Date>June 2021</Date>
            <Dot />
          </ExpWrapper>
          <ExpWrapper index={5}>
            <Date>Aug 2021</Date>
            <Dot />
          </ExpWrapper>
        </LeftSide>
        <RightSide>
        <ContentWrapper index={-1}>
            <Title>
              <Icon src={CudyIcon} />
              Cudy Technologies
            </Title>
            <Position>Frontend Developer (Intern)</Position>
            <Description>
              Design UI/UX of new services <br />
              <br />
              Technologies used :- React , Node , Ant Design , Graphql
              , Styled-Components , SQL , MongoDb
            </Description>
            <Link
              href={'https://cudy.co'}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Website
            </Link>
          </ContentWrapper>

          <ExpWrapperRight index={2}>
            <DateRight>Feb 2021</DateRight>
            <DotRight />
          </ExpWrapperRight>
          <ExpWrapperRight index={3}>
            <DateRight> May 2021</DateRight>
            <DotRight />
          </ExpWrapperRight>
        
          <ContentWrapper index={2}>
            <Title>
              QSS Ventures
            </Title>
            <Position>Software Development Engineer (Intern)</Position>
            <Description>
               Architected and developed React Web-App and a multi-platform <br/> Flutter app within 2 weeks <br />
              Technologies used :- React , Node , Flutter , MongoDb
            </Description>
            <Link
              href={'http://www.qssventures.com/'}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Website
            </Link>
          </ContentWrapper>
        </RightSide>
      </TimelineWrapper>
    </MainWrapper>
  );
}

//Constants

const CONTENT_HEIGHT = '200px';
const BOX_HEIGHT = 5;

//styles

const MainWrapper = styled.div`
  //background-color: ${baseColor.surface};
  border-bottom: 1px solid ${baseColor.surface};
  padding-bottom: 60px;
`;
const Icon = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  left: -55px;
  top: -3px;
`;
const Link = styled.a`
  color: ${baseColor.primary};
  font-size: ${baseStyle.smallTextFont};
`;

const Date = styled.div`
  font-size: ${baseStyle.subTextFont};
  text-align: right;
`;
const Description = styled.p`
  font-size: ${baseStyle.smallTextFont};
  color: ${baseColor.onPrimaryVeryLite};
`;
const Position = styled.div`
  color: ${baseColor.onPrimaryLite};
  font-size: ${baseStyle.subTextFont};
  font-weight: 500;
  margin-top: 5px;
`;

const DateRight = styled.div`
  font-size: ${baseStyle.subTextFont};
  text-align: left;
  width: 100%;
  padding-left: 20px;
`;

const ContentWrapper = styled.div<{ index: number }>`
  padding: 30px 18%;
  border-left: 2px solid ${baseColor.primary};
  height: ${CONTENT_HEIGHT};
  box-sizing: border-box;
  margin-left: -2px;
  margin-top: ${(props: { index: number }) =>
    `calc(${CONTENT_HEIGHT} * ${props.index + 1})`};
`;
const ContentWrapperLeft = styled.div<{ index: number }>`
  padding: 30px 18%;
  border-right: 2px solid ${baseColor.primary};
  height: ${CONTENT_HEIGHT};
  width: 100%;
  box-sizing: border-box;
  margin-left: 2px;
  margin-top: ${(props: { index: number }) =>
    `calc(${CONTENT_HEIGHT} * ${props.index + 1})`};
`;
const Title = styled.div`
  font-weight: bold;
  font-size: ${baseStyle.mainTextFont};
  position: relative;
`;

const Heading = styled.h1`
  font-size: ${baseStyle.mainHeadingFont};
  margin: 80px 0px;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10%;
`;
const LeftSide = styled.div`
  height: ${parseInt(CONTENT_HEIGHT) * BOX_HEIGHT + 20}px;
  width: 50%;
  border-right: 2px solid ${baseColor.onBackground};
  position: relative;
  box-sizing: border-box;
`;
const RightSide = styled.div`
  width: 50%;
  box-sizing: border-box;
  position: relative;
`;
const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: ${baseColor.primary};
  position: absolute;
  top: 0px;
  right: -1px;
  transform: translateX(50%);
`;
const DotRight = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: ${baseColor.primary};
  position: absolute;
  top: 0px;
  left: -1px;
  transform: translateX(-50%);
`;

const ExpWrapper = styled.div<{ index: Number }>`
  position: absolute;
  top: ${(props) => `calc(${props.index} * ${CONTENT_HEIGHT})`};
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
`;
const ExpWrapperRight = styled.div<{ index: Number }>`
  position: absolute;
  top: ${(props) => `calc(${props.index} * ${CONTENT_HEIGHT})`};
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
`;
