import styled from 'styled-components';

export default function ScrollDownBtn() {
  return (
    <MainWrapper
      onClick={() => {
        let height = window.innerHeight;
        window.scrollBy(0, height);
      }}
    ></MainWrapper>
  );
}
const MainWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 1000;
  text-decoration: none;
  text-shadow: 0;
  width: 16px;
  height: 16px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation: fade_move_down 4s ease-in-out infinite;
  animation: fade_move_down 4s ease-in-out infinite;
  cursor: pointer;

  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }

  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes fade_move_down {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
`;
