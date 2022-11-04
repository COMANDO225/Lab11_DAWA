import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './themes/defaultTheme';

ReactDOM.createRoot(document.getElementById('__almeyda')).render(
  // <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  // {/* </React.StrictMode> */}
)
