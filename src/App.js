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
import Slide6 from './slides/slide06';
import Slide7 from './slides/slide07';
import Slide8 from './slides/slide08';
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
      <Slide6 />
      <Slide7 />
      <Slide8 />
    </Deck>
  );
};

export default App;
