import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Router>
            <Header />
            <Box sx={{ mt: 2, mx: 1, mb: 1, flexGrow: 1, overflow: 'hidden', minHeight: '85vh' }}>{children}</Box>
            <Footer />
        </Router>
    </Box>
);

export default MainLayout;
