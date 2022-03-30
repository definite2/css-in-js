import React from 'react';
import { Heading, Slide, Link, Image } from 'spectacle';
import Container from '../layouts/Container';
import codesand from '../assets/code-sandbox.svg';

const Slide7 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Heading size={6} textColor="secondary" caps>
          Dynamic Styling
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

export default Slide7;
