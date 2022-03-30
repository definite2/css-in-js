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
            alignItems: 'space-evenly',
            justifyContent: 'space-between',
            marginTop: 120,
          }}
        >
          <div style={{ width: '100%', overflow: 'auto' }}>
            <Text style={{ textAlign: 'center', marginBottom: 24 }}>
              Style 3rd party UI library component
            </Text>
            <CodePane
              language="javascript"
              theme={atom}
              highlightRanges={[3, 4]}
            >
              {`
              import styled from "styled-components";
              import {Button as AntdButton} from "antd"
              
              const Button = styled(AntdButton)\`
                color: palevioletred;
                \`;

              const App = () => (
                <Button>Hello World, this is my first styled component!</Button>
              );
              `}
            </CodePane>
          </div>
        </div>
      </Container>
    </Slide>
  );
};

export default Slide5d;
