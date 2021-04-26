import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { baseColor, baseStyle } from 'styles/base';
import { Button } from './Button';

interface Props {
  index: Number;
  heading: String;
  subHeading: String;
  para: String;
  liveProject: string;
  githubProject: string;
  noMobile?: Boolean;
  mainImg?: string;
  phoneImg?: string;
}

export default function Project(props: Props): any {
  const [activeImage, setActiveImage] = useState(false);
  const [show, setShow] = useState<imageShow>('mobile');
  useEffect(() => {
    if (props.noMobile) {
      setShow('desktop');
    }
  }, []);

  return (
    <MainWrapper index={props.index}>
      <ImageWrapper index={props.index}>
        <MainImage
          isActive={activeImage}
          isShow={show === 'desktop'}
          onClick={() => {
            setActiveImage(true);
          }}
          src={props.mainImg}
          alt=" "
        />
        <PhoneImage
          isActive={activeImage}
          isShow={show === 'mobile'}
          onClick={() => {
            setActiveImage(true);
          }}
          src={props.phoneImg}
          alt=" "
        />
        <BottomBtns>
          <Button
            onClick={() => {
              setShow('desktop');
            }}
            type={show === 'desktop' ? 'pri' : 'nav'}
            size="small"
          >
            Desktop
          </Button>
          <Button
            onClick={() => {
              setShow('mobile');
            }}
            type={show === 'mobile' ? 'pri' : 'nav'}
            size="small"
            disabled={props.noMobile}
          >
            Mobile
          </Button>
        </BottomBtns>
      </ImageWrapper>
      <ContentWrapper>
        <Heading>{props.heading}</Heading>
        <SubHeading>( {props.subHeading})</SubHeading>
        <Para>{props.para}</Para>
        <LinksWrapper>
          <Link
            href={props.liveProject}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Live Project
          </Link>
          <Link
            href={props.githubProject}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Github Repo
          </Link>
        </LinksWrapper>
      </ContentWrapper>
      <Overlay
        activeImageI={activeImage}
        onClick={() => {
          setActiveImage(false);
        }}
      />
    </MainWrapper>
  );
}

type imageShow = 'desktop' | 'mobile';

const Link = styled.a`
  color: ${baseColor.secondary};
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const SubHeading = styled.h5`
  font-weight: 400;
  margin-top: 0;
  color: ${baseColor.onPrimaryLite};
`;
const Para = styled.p`
  width: 80%;
  margin: auto;
  font-size: ${baseStyle.subTextFont};
  color: ${baseColor.onPrimaryLite};
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const BottomBtns = styled.div`
  margin-top: 20px;
`;

const Overlay = styled.div<{ activeImageI: Boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 0.8;
  z-index: 10;
  ${(props) =>
    props.activeImageI ? `display:block;` : `display:none;`}
`;

const MainWrapper = styled.div<{ index: any }>`
  height: 400px;
  width: 100%;
  padding: 20px 10px;
  margin: 100px 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${baseColor.surface};
  padding: 80px 0px;
  border-radius: 10px;

  ${(props) =>
    props.index % 2 === 0
      ? `
  flex-direction: row-reverse;
  `
      : `
  flex-direction: row;
  `}
`;

const ImageWrapper = styled.div<{ index: any }>`
  position: relative;
  text-align: center;
  width: 50%;
  ${(props) =>
    props.index % 2 === 0
      ? `
  border-left: 1px solid ${baseColor.onPrimaryLite};
  `
      : `
  border-right: 1px solid ${baseColor.onPrimaryLite};
  `}
`;
const ContentWrapper = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
`;

const MainImage = styled.img<{ isActive: Boolean; isShow: Boolean }>`
  height: 21vw;
  max-width: 80%;

  object-fit: cover;
  border-radius: 10px;
  transition-duration: 0.4s;
  cursor: pointer;

  ${(props) =>
    !props.isShow &&
    `
  display:none;
  `}

  &:hover {
    box-shadow: 0px 0px 20px ${baseColor.lightPrimary};
  }

  ${(props) =>
    props.isActive &&
    `
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:100;
    transform: translate(-50%, -50%);
    height:90vh;

    `}
`;

const PhoneImage = styled.img<{ isActive: Boolean; isShow: Boolean }>`
  height: 350px;
  object-fit: cover;
  border-radius: 23px;
  transition-duration: 0.2s;
  cursor: pointer;
  ${(props) =>
    !props.isShow &&
    `
  display:none;
  `}
  &:hover {
    box-shadow: 0px 0px 20px ${baseColor.lightPrimary};
  }

  ${(props) =>
    props.isActive &&
    `
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:100;
    transform: scale(2.4) translate(-25%, -25%);
    `}
`;
