import React from 'react';
import { Deck } from 'spectacle';
import Slide1 from './slides/slide01';
import Slide2 from './slides/slide02';
import Slide3 from './slides/slide03';
import Slide4 from './slides/slide04';
import Slide5 from './slides/slide05';
import Slide5a from './slides/slide05a';
import Slide5b from './slides/slide05b';
import Slide5c from './slides/slide05c';
import Slide5d from './slides/slide05d';
import Slide5dd from './slides/slide05dd';
import Slide5e from './slides/slide05e';
import Slide5f from './slides/slide05f';
import Slide5g from './slides/slide05g';
import Slide6 from './slides/slide06';
import Slide7 from './slides/slide07';
import Slide7b from './slides/slide07b';
import Slide8 from './slides/slide08';
import Slide8b from './slides/slide08b';
import Slide9 from './slides/slide09';
import Slide9b from './slides/slide09b';
import Slide10 from './slides/slide10';
import Slide10b from './slides/slide10b';
import Slide11 from './slides/slide11';
import defaultTheme from './theme/default-theme';
import './index.css';

require('normalize.css');

const App = () => {
  return (
    <Deck transitionDuration={500} theme={defaultTheme}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide5a />
      <Slide5b />
      <Slide5c />
      <Slide5d />
      <Slide5dd />
      <Slide5e />
      <Slide5f />
      <Slide5g />
      <Slide6 />
      <Slide7 />
      <Slide7b />
      <Slide8 />
      <Slide8b />
      <Slide9 />
      <Slide9b />
      <Slide10 />
      <Slide10b />
      <Slide11 />
    </Deck>
  );
};

export default App;
