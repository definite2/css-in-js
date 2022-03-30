import React from 'react';
import {
  Heading,
  Slide,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from 'spectacle';
import Container from '../layouts/Container';
const Slide5 = () => {
  return (
    <Slide transition={['zoom']} bgColor="primary">
      <Container>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          “CSS-in-JS”
        </Heading>
        <Text
          margin="10px 0 40px"
          textColor="tertiary"
          fit
          bold
          textAlign="center"
        >
          Refers to a pattern where CSS is composed using JavaScript instead of
          defined in external files.
        </Text>
        <UnorderedList>
          <Appear>
            <ListItem
              fontSize={30}
              margin="8px 0 16px 0px"
              lineHeight={1.2}
              style={{ listStyle: 'none' }}
            >
              - Thousands of companies use CSS-in-JS in production, including
              Reddit, Patreon, Atlassian, GitHub, Coinbase, Opensea, Vogue, and
              many more.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem
              fontSize={30}
              lineHeight={1.2}
              margin="32px 0 16px 0px"
              style={{ listStyle: 'none' }}
            >
              - CSS-in-JS libraries have been gaining attraction since
              component-based JavaScript frameworks appeared in front-end
              development.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem style={{ listStyle: 'none' }}>
              <div className="rectangle"></div>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Container>
    </Slide>
  );
};

export default Slide5;
