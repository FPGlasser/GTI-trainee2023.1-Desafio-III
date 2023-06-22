import React from 'react';
import { ScrollTop } from './Components';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Middleware';
import { AppRouter } from './Routes/Router';


function App() {

  

  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
