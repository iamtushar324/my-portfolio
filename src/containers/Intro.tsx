import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import myImage from 'assets/my-image.jpeg';
import { baseColor, baseStyle } from 'styles/base';
import { Button, ScrollDownBtn } from 'components';
import GithubIcon from 'assets/github.png';
import LinkedinIcon from 'assets/linkedin.png';
import SendMail from 'assets/sendMail.png';

let imgWidth = 300;

export default function Intro() {
  const [animationText, setAnimationText] = useState('');
  const proTextContent = 'Frontend  Backend  Full-Stack Developer.';
  const [offSet, setOffset] = useState<Number>(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    let index = 0;
    let myInterval = setInterval(() => {
      let tempAnimationValue = 0;
      setAnimationText((prevValue) => {
        tempAnimationValue = prevValue.length;
        return prevValue;
      });
      if (index < 9) {
        setAnimationText(
          (prevValue) => prevValue + proTextContent[index],
        );

        index++;
      }
      if (index === 9 && tempAnimationValue === 0) {
        index = 10;
      }
      if (index === 9) {
        setAnimationText((prevValue) =>
          prevValue.substr(0, prevValue.length - 1),
        );
      }
      if (index > 9 && index < 18) {
        setAnimationText(
          (prevValue) => prevValue + proTextContent[index],
        );
        index++;
      }
      if (index === 18 && tempAnimationValue === 0) {
        index = 19;
      }
      if (index === 18) {
        setAnimationText((prevValue) =>
          prevValue.substr(0, prevValue.length - 1),
        );
      }
      if (index > 18 && index < proTextContent.length) {
        setAnimationText(
          (prevValue) => prevValue + proTextContent[index],
        );
        index++;
      }
      if (index === proTextContent.length) {
        clearInterval(myInterval);
      }
    }, 100);
  }, []);

  return (
    <MainWrapper>
      <ScrollDownBtn />
      <TextWrapper>
        <IntroText>
          Hi , I'm{' '}
          <Pri>
            Tushar <br /> Bhardwaj
          </Pri>
        </IntroText>
        <ProTextWrapper>
          <ProText> A {animationText}</ProText>
        </ProTextWrapper>
      </TextWrapper>
      <ImageWrapper>
        <StyledImg src={myImage} alt=" " offSet={offSet} />
      </ImageWrapper>
      <SocialIconWrapper>
        <a href="https://github.com/iamtushar324" target="_blank">
          <Icon src={GithubIcon} alt=" " />
        </a>
        <a
          href="https://www.linkedin.com/in/tushar-bhardwaj-5a820a193/"
          target="_blank"
        >
          <Icon src={LinkedinIcon} alt=" " />
        </a>
        <a href="mailto:iamtushar324@gmail.com" target="_black">
          <Icon src={SendMail} alt=" " />
        </a>
      </SocialIconWrapper>
    </MainWrapper>
  );
}

//styles

const SocialIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-evenly;
  height: 200px;
  position: fixed;
  top: 30%;
  left: 20px;
`;
const Icon = styled.img`
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

const KnowMoreBtn = styled(Button)`
  background-color: ${baseColor.primary};
  color: ${baseColor.onPrimary};
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${baseColor.surface};
`;
const ProTextWrapper = styled.div`
  display: inline-block;
`;
const ProText = styled.div`
  display: inline-block;
  overflow: hidden;
  letter-spacing: 2px;
  animation: blink 0.75s step-end infinite;
  white-space: nowrap;
  font-size: 30px;
  font-weight: 700;
  border-right: 4px solid ${baseColor.primary};
  box-sizing: border-box;
  width: auto;

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${baseColor.primary};
    }
  }
`;

const StyledImg = styled.img<{ offSet?: offSetType }>`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 100%;
  //animation: shadow 2s ease-in-out infinite;
  transition: 0.1s;

  @keyframes shadow {
    0% {
      box-shadow: 0px 0px 0px ${baseColor.primary};
    }
    50% {
      box-shadow: 0px 0px 20px ${baseColor.primary};
    }
    0% {
      box-shadow: 0px 0px 0px ${baseColor.primary};
    }
  }
`;
type offSetType = Number;

const IntroText = styled.h1`
  font-size: ${baseStyle.mainHeadingFont};
`;
const Pri = styled.span`
  color: ${baseColor.primary};
`;

const TextWrapper = styled.div`
  min-width: 376px;
  z-index: 100;
`;
const ImageWrapper = styled.div`
  background-color: ${baseColor.surface};
  padding: 20px;
  border-radius: 100%;
  z-index: 100;
  animation: float 3s ease-in-out 2s infinite alternate;

  @keyframes float {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;
