// Import React
import React from 'react';
import { Heading, Slide } from 'spectacle';
import Container from '../layouts/Container';

const Slide11 = () => {
  return (
    <Slide transition={['zoom']}>
      <Container>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Thank you
        </Heading>
      </Container>
    </Slide>
  );
};

export default Slide11;
