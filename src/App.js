import React from "react";
import './App.css';
import Todolist from './components/Todolist';
import Header from './components/Header';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#663671',
    },
    secondary: {
      main: '#d66d92',
    },
    success: {
      main: '#66bb6a',
      contrastText: 'rgba(255,255,255,0.87)',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header></Header>
      <Todolist></Todolist>
      </ThemeProvider>
    </div>
  );
};

export default App;
