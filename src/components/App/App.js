import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: hsl(0deg 0% 100%);
    --gray-100: hsl(185deg 5% 95%);
    --gray-300: hsl(190deg 5% 80%);
    --gray-500: hsl(196deg 4% 60%);
    --gray-700: hsl(220deg 5% 40%);
    --gray-900: hsl(220deg 3% 20%);
    --primary: hsl(340deg 65% 47%);
    --secondary: hsl(240deg 60% 63%);
  }
`

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
