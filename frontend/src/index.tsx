import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
    palette: {
        primary: {
            main: '#bb0033',
        },
        secondary: {
            main: '#424143',
        },
        text: {
            secondary: '#000000',
        },
        error: {
            main: '#d32f2f',
        },
    },
    typography: {
        fontSize: 12,
        fontFamily: '"Helvetica", "Arial", sans-serif',
    },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
