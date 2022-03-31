import React from 'react';
import { Heading, Slide } from 'spectacle';
import Container from '../layouts/Container';

const Slide10 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Heading size={6} textColor="secondary" caps>
          Tradeoffs
        </Heading>
      </Container>
    </Slide>
  );
};

export default Slide10;
