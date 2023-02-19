import { Box, IconButton, Menu, SwipeableDrawer } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TableChartIcon from '@mui/icons-material/TableChart';
import ListItemText from '@mui/material/ListItemText';
import { FC, memo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/constants';

interface Menu {
    menuLabel: string;
    menuIcon: any;
    link: string;
}

const menuItems: Menu[] = [
    {
        menuLabel: 'Felhasználó Form',
        menuIcon: ArticleIcon,
        link: ROUTES.USER_FORM,
    },
    {
        menuLabel: 'Felhasználó Tábla',
        menuIcon: TableChartIcon,
        link: ROUTES.USER_TABLE,
    },
];

const MainMenu: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDrawer = () => () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <IconButton onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
                <MenuIcon style={{ color: '#ffffff' }} />
            </IconButton>
            <SwipeableDrawer anchor="left" open={isMenuOpen} onClose={toggleDrawer()} onOpen={toggleDrawer()}>
                <Box role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()} sx={{ width: 250 }}>
                    <List>
                        {menuItems.map(({ menuLabel, menuIcon: Icon, link }, index) => (
                            <Link
                                key={index}
                                to={link}
                                style={{ color: '#008080' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <ListItemButton key={menuLabel}>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={menuLabel} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default memo(MainMenu);
