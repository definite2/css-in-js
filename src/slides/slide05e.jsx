import React from 'react';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Slide, CodePane, Text, Appear, Notes } from 'spectacle';
import { FiArrowDown } from 'react-icons/fi';
import Container from '../layouts/Container';

const Slide5e = () => {
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
            Injecting {`<style>`} Tag
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
    <style data-styled="active" data-styled-version="5.3.5">
    .cMdIx {
      display:-webkit-box;
      display:-webkit-flex;
      display:-ms-flexbox;
      display:flex;
    }
    </>
        `.trim()}
              </CodePane>
            </Appear>
          </div>
        </div>
      </Container>
      <Notes>
        Most CSS-in-JS libraries inject styles into the DOM at runtime, using
        either one or more style tags, or using the CSSStyleSheet API to manage
        styles directly within the CSSOM. During SSR, styles are always appended
        as a style tag inside the head of the rendered HTML page. because
        rendering is not blocked by fetching a separate .css file from the
        server FCP is very good. It provides out of teh boc critical css
        extraction drawbacks: an additional runtime library is required for
        handling dynamic styling in the browser; the inlined SSR styles won’t be
        cached out-of-the-box and they will need to be shipped to the browser
        upon each request since they’re part of the .html file rendered by the
        server;
      </Notes>
    </Slide>
  );
};

export default Slide5e;

// import React from 'react';
// import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
// import { Slide, CodePane, Text } from 'spectacle';
// import Container from '../layouts/Container';

// const Slide5d = () => {
//   return (
//     <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
//       <Container>
//         <div
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             alignItems: 'space-evenly',
//             justifyContent: 'space-between',
//             marginTop: 120,
//           }}
//         >
//           <div style={{ width: '100%', overflow: 'auto' }}>
//             <Text style={{ textAlign: 'center', marginBottom: 24 }}>
//               Style 3rd party UI library component
//             </Text>
//             <CodePane
//               language="javascript"
//               theme={atom}
//               highlightRanges={[3, 4]}
//             >
//               {`
//               import styled from "styled-components";
//               import {Button as AntdButton} from "antd"

//               const Button = styled(AntdButton)\`
//                 color: palevioletred;
//                 \`;

//               const App = () => (
//                 <Button>Hello World, this is my first styled component!</Button>
//               );
//               `}
//             </CodePane>
//           </div>
//         </div>
//       </Container>
//     </Slide>
//   );
// };

// export default Slide5d;
