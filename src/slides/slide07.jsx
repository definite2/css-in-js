import React from 'react';
import { Heading, Slide, CodePane } from 'spectacle';
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

const Slide7 = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading fontSize={35} textColor="secondary" caps>
        Advanced Feature: Theming
      </Heading>
      <div style={{ width: '1200px', margin: 25, overflow: 'auto' }}>
        <CodePane language="javascript" theme={atom} highlightRanges={[16, 18]}>
          {`
           // Define our button, but with the use of props.theme this time
           const Button = styled.button\`
             font-size: 1em;
             color: ${(props) => props.theme.primary};
             border: 2px solid ${(props) => props.theme.main};
             \`;
           // Define what props.theme will look like
           const theme = {
             main: #242450;
             primary: #7a4bff;
             secondary: #00e0e4;
            };          
           return(
             <div>
               <Button>Normal</Button>      
               <ThemeProvider theme={theme}>
                 <Button>Themed</Button>
               </ThemeProvider>
             </div>
           );
              `}
        </CodePane>
      </div>
    </Slide>
  );
};

export default Slide7;
