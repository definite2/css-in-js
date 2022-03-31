import React from 'react';
import { CodePane, Slide, Text } from 'spectacle';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import Container from '../layouts/Container';

const Slide9b = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'space-evenly',
            justifyContent: 'space-between',
            marginTop: 120,
          }}
        >
          <div
            style={{
              width: '500px',
              marginLeft: 25,
              marginRight: 16,
              overflow: 'auto',
            }}
          >
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              Using Helper
            </Text>
            <CodePane language="jsx" theme={atom} highlightRanges={[15, 18]}>
              {`import { MEDIA } from './util';

const Container = styled.div({
  ...MEDIA.greaterThan(400)({
    display: 'flex'
  }, {
    color:red
  })
});
            `}
            </CodePane>
          </div>
          <div style={{ width: '700px', overflow: 'auto' }}>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              End result
            </Text>
            <CodePane
              language="javascript"
              theme={atom}
              highlightRanges={[1, 2]}
            >
              {`
            @media only screen and (min-width: 400px) {
              .sXygTc {
                display:-webkit-box;
                display:-webkit-flex;
                display:-ms-flexbox;
                display:flex;
                color:red;
              }
            }
              `}
            </CodePane>
          </div>
        </div>
      </Container>
    </Slide>
  );
};
export default Slide9b;
