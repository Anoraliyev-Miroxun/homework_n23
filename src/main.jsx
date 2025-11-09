import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme.js';
import ReactDOM from 'react-dom/client';



ReactDOM.createRoot(document.getElementById("root")).render(
    < React.StrictMode >
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider >
        </BrowserRouter>
    </ React.StrictMode >
)


