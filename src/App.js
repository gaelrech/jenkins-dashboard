import React from 'react';
import Dashboard from './components/Dashboard'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e1ffb1',
      main: '#aed581',
      dark: '#7da453',
      contrastText: '#000000',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dashboard ></Dashboard>
      </ThemeProvider>
    </div>
  );
}

export default App;
