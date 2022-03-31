import React from 'react';
import { Heading, Slide, Image, Notes } from 'spectacle';
import Container from '../layouts/Container';
import mike from '../assets/mike.gif';
const Slide5b = () => {
  return (
    <Slide>
      <Container>
        <Heading margin="0px 0 40px 0" textColor="secondary" caps>
          Definition Syntax
        </Heading>
        <Image src={mike} height={400} />
      </Container>
      <Notes>Style tanımlamak için iki syntax yöntem var</Notes>
    </Slide>
  );
};

export default Slide5b;
