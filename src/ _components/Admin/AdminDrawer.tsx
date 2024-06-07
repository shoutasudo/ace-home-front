'use client';

import { Theme, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../ListItem';

interface AdminDrawerProps {
    toggleDrawer: () => void;
    open: boolean;
    theme: Theme;
}


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => {
        const drawerWidth = theme.custom.drawerWidth;
        return {
            '& .MuiDrawer-paper': {
                position: 'fixed',
                whiteSpace: 'nowrap',
                width: drawerWidth, // Use drawerWidth from theme
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        };
    }
);

const AdminDrawer = ({  toggleDrawer, open ,theme }: AdminDrawerProps) => (
    <>
    <div style={{width: theme.spacing(7)}}></div>
    <Drawer variant="permanent" open={open}>
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            }}
        >
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
        </List>
    </Drawer>
    </>
);

export default AdminDrawer;