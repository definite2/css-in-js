import React from 'react';
import { Heading, Slide, Link, Image } from 'spectacle';
import Container from '../layouts/Container';
import codesand from '../assets/code-sandbox.svg';

const Slide8 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Heading fontSize={35} textColor="secondary" caps>
          Dynamic Styling Example
        </Heading>
        <Link
          href="https://codesandbox.io/s/compassionate-frost-swvmy6"
          target="_blank"
        >
          <Image src={codesand} />
        </Link>
      </Container>
    </Slide>
  );
};

export default Slide8;
