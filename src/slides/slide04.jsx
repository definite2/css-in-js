import React from 'react';
import { Heading, Image, Slide } from 'spectacle';

const Slide4 = () => {
  return (
    <Slide>
      <Heading textColor="secondary" caps>
        Now... let's start 👏
      </Heading>
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <Image
          src={'https://media.giphy.com/media/9DGFdfnT6SJSE/giphy.gif'}
          height={500}
        />
      </div>
    </Slide>
  );
};

export default Slide4;
