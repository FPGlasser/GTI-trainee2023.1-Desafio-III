import React from 'react';
import logo from './logo.svg';
import { AppRoutes } from './Routes/Router';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './Pages/error/ErrorBoundries';


function App() {
  return (
    <>
      <ErrorBoundary>

      <ThemeProvider theme={{}}>
        <AppRoutes />
      </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
