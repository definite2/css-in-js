import React from 'react';
import { Heading, Image, Slide, Stepper } from 'spectacle';
import Container from '../layouts/Container';
import npmStats from '../assets/npm_st.png';
import reactStats from '../assets/react_installs.png';
const Slide5a = () => {
  return (
    <Slide>
      <Heading fontSize={35} textColor="secondary" caps>
        Trends in CSS-in-JS libraries
      </Heading>
      <Container>
        <Stepper alwaysVisible values={[npmStats, reactStats]}>
          {(value, step, isActive) =>
            !isActive ? (
              <Image src={npmStats} width={1200} />
            ) : (
              <Image src={reactStats} width={1200} />
            )
          }
        </Stepper>
      </Container>
    </Slide>
  );
};

export default Slide5a;
