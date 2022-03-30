import React from 'react';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Slide, CodePane, Text } from 'spectacle';
import Container from '../layouts/Container';

const Slide5d = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            marginTop: '120px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ width: '500px', overflow: 'auto' }}>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              styled-components
            </Text>
            <CodePane
              language="javascript"
              theme={atom}
              highlightRanges={[2, 3]}
            >
              {`
              import styled from "styled-components";
              
              const Title = styled.h1\`
                font-size: 1.5em;
                text-align: center;
                color: palevioletred;
                \`;

              const App = () => (
                <Title>Hello World, this is my first styled component!</Title>
              );
              `}
            </CodePane>
          </div>
          <div
            style={{
              width: '700px',
              marginLeft: 25,
              marginRight: 16,
              overflow: 'auto',
            }}
          >
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              Class Name in DOM
            </Text>
            <CodePane language="jsx" theme={atom}>
              {`
              <h1 class="sc-bdVaJa bzmvhR">Hello World, this is my first styled component!</h1>         
            `}
            </CodePane>
          </div>
        </div>
      </Container>
    </Slide>
  );
};

export default Slide5d;
