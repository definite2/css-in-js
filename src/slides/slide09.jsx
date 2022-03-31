import React from 'react';
import { CodePane, Text, Slide } from 'spectacle';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import Container from '../layouts/Container';

const Slide9 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>
          Creating CSS Helper
        </Text>
        <CodePane language="javascript" theme={atom} highlightRanges={[6, 8]}>
          {`
import { css } from 'styled-components';

export const MEDIA = {
  greaterThan(breakpoint) {
    return (...args) => {
      return css\`
        @media only screen and (min-width: \`\${breakpoint}px\`) {
          \${css(...args)}
        }
      \`
    };
  }
};
        `}
        </CodePane>
      </Container>
    </Slide>
  );
};
export default Slide9;
