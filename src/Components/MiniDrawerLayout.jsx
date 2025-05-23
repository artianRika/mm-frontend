import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar, List, CssBaseline,
    Typography, IconButton, ListItem, ListItemButton, ListItemIcon,
    ListItemText, Avatar
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';

import colors from "../colors";
import CurrencyButton from "./CurrencyButton";
import ControlButton from "./ControlButton";
import LogoutDialog from "./LogoutDialog";
import MainView from "./MainView";
import AddCurrencyModal from "./AddCurrencyModal";
import {useState} from "react";

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
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function MiniDrawerLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [signOutAlertOpen, setSignOutAlertOpen] = React.useState(false);
    const [addCurrencyAlertOpen, setAddCurrencyAlertOpen] = React.useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);
    const [selectedCurrencyName, setSelectedCurrencyName] = useState("Denars...");


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: colors.primary }}>
                <Toolbar>
                    <IconButton
                        color="black"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ color: "black" }}>
                        Where's MM
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
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
                        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                            <Avatar
                                sx={{ width: "3rem", height: "3rem", flexShrink: 0 }}
                                src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    marginLeft: "1rem",
                                    fontSize: ".9rem",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                    flexGrow: 1,
                                    minWidth: 0,
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

                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        overflowX: "hidden",
                        backgroundColor: "rgba(234,234,234,0.67)",
                        maxHeight: "calc(100vh - 120px)",
                    }}
                >
                    <List>
                        {["Dollar", "Euro"].map((text) => (
                            <ListItem key={text} sx={{ display: "flex", alignItems: "center" }}>
                                <CurrencyButton text={text} open={open} currency="MKD" />
                            </ListItem>
                        ))}
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
                            onClick={() => setAddCurrencyAlertOpen(true)}
                        >
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: open ? 3 : "auto" }}>
                                <AddIcon sx={{ color: "black" }} />
                            </ListItemIcon>
                            {open && <ListItemText primary="Add currency" sx={{ flexGrow: 1 }} />}
                        </ListItemButton>
                            <AddCurrencyModal addCurrencyAlertOpen={addCurrencyAlertOpen} onAddCurrencyAlertClose={() => setAddCurrencyAlertOpen(false)} />
                    </List>
                </Box>

                <List
                    sx={{
                        position: "sticky",
                        bottom: 0,
                        backgroundColor: "rgba(234,234,234,0.67)",
                        width: "100%",
                        zIndex: 1000,
                    }}
                >
                    <ControlButton text="Options" open={open} />
                    <ControlButton text="Logout" open={open} onClick={() => setSignOutAlertOpen(true)} />
                    <LogoutDialog alertOpen={signOutAlertOpen} onAlertClose={() => setSignOutAlertOpen(false)} />
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {<MainView currencyId={selectedCurrencyId} currencyName={selectedCurrencyName} />}
            </Box>
        </Box>
    );
}
