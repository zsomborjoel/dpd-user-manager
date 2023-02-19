import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Box } from '@mui/material';
import MainMenu from './MainMenu';

const Header: FC = () => (
    <AppBar position="static" sx={{ height: 65 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', height: 1 }}>
            <MainMenu />
            <Toolbar>
                <Typography ml={1} color="#ffffff">
                    Dpd Form rendszer
                </Typography>
            </Toolbar>
        </Box>
    </AppBar>
);

export default Header;
