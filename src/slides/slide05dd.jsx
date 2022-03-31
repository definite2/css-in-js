import React from 'react';
import { Heading, Slide, Notes } from 'spectacle';
import Container from '../layouts/Container';

const Slide5d = () => {
  return (
    <Slide>
      <Container>
        <Heading margin="0px 0 40px 0" textColor="secondary" caps>
          Styles Output
        </Heading>
      </Container>
      <Notes>
        CSS-in-JS kütüphaneleri output olarak genelde style tag'i oluşturuyor
        fakat bazıları ise output olarak .css dosyası oluşturuyor. Her birinin
        avantajı ve dezavantajı olabiliyor.
      </Notes>
    </Slide>
  );
};

export default Slide5d;
