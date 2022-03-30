import React from 'react';
import { Slide, Heading, ListItem, UnorderedList } from 'spectacle';
import Container from '../layouts/Container';

const Slide2 = () => {
  return (
    <Slide transition={['zoom']}>
      <Container>
        <Heading
          margin="0 0 40px"
          size={1}
          fit
          caps
          lineHeight={1}
          textColor="secondary"
        >
          This presentation is about... 👩‍💻
        </Heading>
        <UnorderedList
          textColor="secondary"
          style={{ listStylePosition: 'outside' }}
        >
          <ListItem margin="10px 0 20px">What is CSS-in-JS?</ListItem>
          <ListItem margin="10px 0 20px">Why use it?</ListItem>
          <ListItem margin="10px 0 20px">Examples</ListItem>
          <ListItem margin="10px 0 20px">The tradeoffs</ListItem>
          <ListItem margin="10px 0 20px">
            Extras: My favorite libraries
          </ListItem>
        </UnorderedList>
      </Container>
    </Slide>
  );
};

export default Slide2;
