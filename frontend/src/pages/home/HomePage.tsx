import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

const HomePage: FC = () => (
    <Box sx={{ marginTop: 8, marginBottom: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
            Üdvözöljük!
        </Typography>
    </Box>
);

export default HomePage;
