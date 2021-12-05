import styled from 'styled-components';
import { baseColor } from 'styles/base';
import { Intro, Exp, Skills } from 'containers';
import Projects from 'containers/Projects';
import Particles from 'react-tsparticles';

export default function App() {
  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <MainWrapper>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transperent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.3,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1100,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <Intro />
      <Exp />
      <Skills />
      <Projects />
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
