import React from 'react';
import {
  Heading,
  UnorderedList,
  ListItem,
  Slide,
  Appear,
  Notes,
} from 'spectacle';
import Container from '../layouts/Container';

const Slide6 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Heading size={6} textColor="secondary" caps>
          Common CSS-in-JS Features
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem margin="0px 0 20px 0">Scoped CSS</ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0px 0 20px 0">Automatic vendor prefixes</ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0px 0 20px 0">
              SSR (Server-Side Rendering)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0px 0 20px 0">Full CSS support</ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0px 0 20px 0">Dead code elimination</ListItem>
          </Appear>
          <Appear>
            <ListItem margin="0px 0 20px 0">
              Full power of the JavaScript
            </ListItem>
          </Appear>
        </UnorderedList>
      </Container>
    </Slide>
  );
};

export default Slide6;
