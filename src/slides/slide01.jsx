// Import React
import React from 'react';
import { Heading, Slide, Text } from 'spectacle';
import Container from '../layouts/Container';

const Slide1 = () => {
  return (
    <Slide transition={['zoom']}>
      <Container>
        <Heading
          margin="200px 0 0px"
          size={1}
          fit
          caps
          lineHeight={1}
          textColor="secondary"
        >
          CSS-IN-JS
        </Heading>
        <Text margin="40px 0 20px" textSize={25}>
          Defne Eroğlu
        </Text>
        <Text margin="10px 0 100px" textSize={20}>
          @Appsamurai - March 2022
        </Text>
      </Container>
    </Slide>
  );
};

export default Slide1;
