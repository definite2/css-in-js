import React from 'react';
import { Slide, Heading, ListItem, UnorderedList } from 'spectacle';
import Container from '../layouts/Container';

const Slide3 = () => {
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
          This presentation isn't about... 🙅‍♀️
        </Heading>
        <UnorderedList
          textColor="secondary"
          style={{ listStylePosition: 'outside' }}
        >
          <ListItem>Basic introduction to JavaScript or React or CSS</ListItem>
        </UnorderedList>
      </Container>
    </Slide>
  );
};

export default Slide3;
