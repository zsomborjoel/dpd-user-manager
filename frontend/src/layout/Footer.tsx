import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { Box, Link } from '@mui/material';

const Footer: FC = () => (
    <Box display="flex" justifyContent="center">
        <Typography mr={2}>
            {`Szerzői jog ©`}{' '}
            <Link color="inherit" href="https://www.dpd.com/">
                Dpd Group
            </Link>{' '}
            {`${new Date().getFullYear()}`}
        </Typography>
    </Box>
);

export default Footer;
