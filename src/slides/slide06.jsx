import React from 'react';

import { Heading, UnorderedList, ListItem, Slide } from 'spectacle';

const Slide6 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Common CSS-in-JS features
      </Heading>
      <UnorderedList>
        <ListItem margin="0px 0 20px" style={{ fontSize: 25 }}>
          Scoped CSS
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          SSR (Server-Side Rendering)
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Automatic vendor prefixes
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Full CSS support
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Dead code elimination
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Full power of the JavaScript
        </ListItem>
      </UnorderedList>
    </Slide>
  );
};

export default Slide6;
