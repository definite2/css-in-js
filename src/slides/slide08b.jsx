import React from 'react';
import { Heading, Slide } from 'spectacle';
import Container from '../layouts/Container';

const Slide8b = () => {
  return (
    <Slide>
      <Container>
        <Heading
          fontSize={35}
          margin="40px 0 20px 0"
          textColor="secondary"
          caps
        >
          CSS Util Example
        </Heading>
      </Container>
    </Slide>
  );
};

export default Slide8b;
