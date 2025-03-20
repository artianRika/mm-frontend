import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import {Avatar} from "@mui/material";
import colors from "./colors"
import MainView from "./Components/MainView.js";
import CurrencyButton from "./Components/CurrencyButton";
import ControlButton from "./Components/ControlButton";
import LogoutDialog from "./Components/LogoutDialog";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: colors.primary}}>
                <Toolbar sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ color: "black" }}>
                        Where's MM
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open ? 240 : 69, // Adjust width based on open state
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: open ? 240 : 69,
                        transition: "width 0.3s ease", // Smooth transition on toggle
                    },
                }}
            >
                <DrawerHeader
                    sx={{
                        backgroundColor: "rgba(187,215,186,0.73)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "sticky",
                        top: 0,
                        zIndex: 1100,
                        width: "100%",
                        padding: "0.5rem 1rem",
                    }}
                >
                    {open && (
                        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, overflow: "hidden"}}>
                            <Avatar
                                sx={{ width: "3rem", height: "3rem", flexShrink: 0 }}
                                src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    marginLeft: "1rem",
                                    fontSize: "1rem",
                                    wordWrap: "break-word", // Ensures long words break
                                    whiteSpace: "normal", // Allows text to wrap
                                    display: "-webkit-box", // Enables multi-line with ellipsis fallback
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2, // Limits to 2 lines
                                    overflow: "hidden", // Hides extra content if needed
                                    flexGrow: 1, // Takes available space
                                    minWidth: 0, // Ensures it shrinks if needed
                                }}
                            >
                                Artian Rika
                            </Typography>
                        </Box>
                    )}

                    <IconButton onClick={handleDrawerClose} sx={{ flexShrink: 0 }}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>


                {/* Scrollable Content (Profile + Currency List) */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        overflowX: "hidden",
                        backgroundColor:"rgba(234,234,234,0.67)",
                        maxHeight: "calc(100vh - 120px)", // Adjust for header and bottom buttons
                    }}
                >


                    {/* Scrollable Currency List */}
                    <List>
                        {["Dollar", "Euro"].map((text, index) => (
                            <ListItem key={text} sx={{ display: "flex", alignItems: "center" }}>
                                <CurrencyButton text={text} open={open} currency={"USD"}/>
                            </ListItem>
                        ))}

                        {/* Add Currency Button */}
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                margin: ".5rem 1rem",
                                display: "flex",
                                backgroundColor: "#fff",
                                justifyContent: open ? "space-between" : "center",
                                alignItems: "center",
                                border: ".3px solid #ccc",
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    border: "0.3px solid #D0EBD1",
                                    backgroundColor: colors.primary,
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: open ? 3 : "auto" }}>
                                <AddIcon sx={{ color: "black" }} />
                            </ListItemIcon>

                            {open && <ListItemText primary={"Add currency"} sx={{ flexGrow: 1 }} />}
                        </ListItemButton>
                    </List>
                </Box>

                {/* Fixed Bottom Buttons */}
                <List
                    sx={{
                        position: "sticky",
                        bottom: 0,
                        backgroundColor : "rgba(234,234,234,0.67)",
                        width: "100%",
                        zIndex: 1000,
                    }}
                >
                    <ControlButton text={"Options"} open={open}/>
                    <ControlButton text={"Logout"} open={open} alertOpen={alertOpen}
                        onClick={() => {setAlertOpen(true)}}
                    />

                    {/*//LogOut Dialog*/}
                    <LogoutDialog alertOpen={alertOpen} onAlertClose={() => setAlertOpen(false)} />
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <MainView/>

            </Box>
        </Box>
    );
}
