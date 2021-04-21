import styled from 'styled-components';
import SampleMain from 'assets/selfpaced-desktop.png';
import SamplePhone from 'assets/selfpaced-phone.png';
import { useState } from 'react';
import { baseColor, baseStyle } from 'styles/base';
import { Button } from './Button';

interface Props {
  index: Number;
}

export default function Project(props: Props): any {
  const [activeImage, setActiveImage] = useState(false);
  const [show, setShow] = useState<imageShow>('mobile');

  return (
    <MainWrapper index={props.index}>
      <ImageWrapper index={props.index}>
        <MainImage
          isActive={activeImage}
          isShow={show === 'desktop'}
          onClick={() => {
            setActiveImage(true);
          }}
          src={SampleMain}
          alt=" "
        />
        <PhoneImage
          isActive={activeImage}
          isShow={show === 'mobile'}
          onClick={() => {
            setActiveImage(true);
          }}
          src={SamplePhone}
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
          >
            Mobile
          </Button>
        </BottomBtns>
        <ClickToZoom>Click on Image to Zoom</ClickToZoom>
      </ImageWrapper>
      <ContentWrapper></ContentWrapper>
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

const BottomBtns = styled.div`
  margin-top: 20px;
`;
const ClickToZoom = styled.span`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${baseStyle.smallTextFont};
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
  flex-direction: row;
  justify-content: flex-end;
  ${(props) =>
    props.index % 2 === 0
      ? `
  justify-content: flex-end;
  `
      : `
  justify-content: flex-start;
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
const ContentWrapper = styled.div``;

const MainImage = styled.img<{ isActive: Boolean; isShow: Boolean }>`
  height: 350px;
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
    transform: scale(2.4) translate(-25%, -25%);
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
