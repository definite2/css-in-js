import React from 'react';

import { Heading, Image, Slide } from 'spectacle';
import tweet1 from '../assets/mike.gif';

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
        <Image src={tweet1} height={600} />
      </div>
    </Slide>
  );
};

export default Slide4;
