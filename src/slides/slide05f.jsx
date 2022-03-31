import React from 'react';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Slide, CodePane, Text, Appear, Notes } from 'spectacle';
import { FiArrowDown } from 'react-icons/fi';
import Container from '../layouts/Container';

const Slide5f = () => {
  return (
    <Slide>
      <Container>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', marginBottom: 20 }}>
            .css File
          </Text>
          <div style={{ width: '500px', overflow: 'auto' }}>
            <CodePane
              language="javascript"
              theme={atom}
              highlightRanges={[2, 3]}
            >
              {`  
              const Container = styled.div\`
                display: flex;
                \`;
              `}
            </CodePane>
          </div>
          <FiArrowDown fontSize={35} color="green" />
          <div
            style={{
              width: '700px',
              marginLeft: 25,
              marginRight: 16,
              overflow: 'auto',
              marginTop: 25,
            }}
          >
            <Appear>
              <CodePane language="jsx" theme={atom}>
                {`
    .cMdIx {
      display:-webkit-box;
      display:-webkit-flex;
      display:-ms-flexbox;
      display:flex;
    }

        `.trim()}
              </CodePane>
            </Appear>
          </div>
        </div>
      </Container>
      <Notes>
        En büyğk avantajı .css cache mekanizması sağlaması. Browser css'yi
        cache'leyebilecek. Bu yöntem SSR kullananlar tarafından tercih
        edilebilir bu şekilde subsequent requests to the same page won’t fetch
        the styles again.
      </Notes>
    </Slide>
  );
};

export default Slide5f;
