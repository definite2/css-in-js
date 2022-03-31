import React from 'react';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Slide, CodePane, Text, Notes } from 'spectacle';
import Container from '../layouts/Container';

const Slide5c = () => {
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
          }}
        >
          <div
            style={{
              width: '700px',
              marginLeft: 25,
              marginRight: 16,
              overflow: 'auto',
            }}
          >
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              Object Styles syntax
            </Text>
            <CodePane language="jsx" theme={atom} highlightRanges={[15, 18]}>
              {`
          const styles = {
            wrapper: {
              padding: 40,
              background: "#f7df1e",
              textAlign: "center"
            },
            link: {
              color: "#24292e",
              "&:hover": {
                opacity: 0.5
              }
            }
          };
          
          const { classes } = jss.createStyleSheet(styles).attach();
            <div class={classes.wrapper}>
              <a
                class={classes.link}
                href="http://cssinjs.org/"
                traget="_blank"
              >
                See docs
              </a>
            </div>          
            `}
            </CodePane>
          </div>
          <div style={{ width: '500px', overflow: 'auto' }}>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              End Result
            </Text>
            <CodePane
              language="javascript"
              theme={atom}
              highlightRanges={[1, 2]}
            >
              {`
              <div class="wrapper-0-0-1">
                <a class="link-0-0-3" href="http://cssinjs.org/" traget="_blank">
                  See docs
                  </a>
              </div>
              `}
            </CodePane>
          </div>
        </div>
      </Container>
      <Notes>
        birincisi object styles syntax: css değerlerimizi normal javascript
        objesi olarak tanımlayabiliyoruz
      </Notes>
    </Slide>
  );
};

export default Slide5c;
