import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{backgroundColor: "rgba(187,215,186,0.73)"}}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>


                {/*----------*/}
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>

                    <List sx={[{ display: "flex", flexDirection: "column", alignItems: "center" },
                        open
                            ? {
                                justifyContent: 'center',
                            }
                            : {
                                display: "none",
                            },
                    ]}>
                        <Avatar
                            sx={{ width: "5rem", height:"5rem", marginTop: 1 }}
                            src={"https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"}/>
                        <Typography variant={"h6"}>Artian Rika</Typography>
                    </List>


                        <Divider/>

                    {/*Upper Buttons*/}

                    {/*TODO: clicked btn should be active*/}
                    <List>
                        {["MKD", "Eurolat", "Dollarkat"].map((text, index) => (
                            <ListItem key={text}  sx={{ display: "flex", alignItems: "center"}}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        px: 2.5,
                                        display: "flex",
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
                                        <Box
                                            component="img"
                                            src="/icons/macedonia-denar.png"
                                            alt="Macedonian Denar"
                                            sx={{
                                                width: "20px",
                                                height: "auto",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={text}
                                        sx={{ opacity: open ? 1 : 0, flexGrow: 1 }}
                                    />


                                    {open && (
                                        <IconButton sx={{ padding: 0 }}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    )}
                                </ListItemButton>
                            </ListItem>
                        ))}

                    {/*    Add Currency BTN    */}

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                margin: ".5rem 1rem",
                                display: "flex",
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
                                <AddIcon sx={{ color: "black" }}/>
                            </ListItemIcon>

                            <ListItemText
                                primary={"Add currency"}
                                sx={{ opacity: open ? 1 : 0, flexGrow: 1 }}
                            />

                        </ListItemButton>

                    </List>


                    {/*Bottom part buttons*/}

                    {/*TODO: bottom btns should not move, the currencies should be scrollable njet ke kta*/}
                    <List sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                            mt: "auto"}}
                    >
                        {['Options', 'Logout'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 2.5,
                                        },
                                        open
                                            ? {
                                                justifyContent: 'initial',
                                            }
                                            : {
                                                justifyContent: 'center',
                                            },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                    mr: 3,
                                                }
                                                : {
                                                    mr: 'auto',
                                                },
                                        ]}
                                    >
                                        {index % 2 === 0 ? <MoreVertIcon /> : <LogoutIcon sx={{color: "red", }}/>}
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={text}
                                        sx={[
                                            open
                                                ? {
                                                    opacity: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography sx={{ marginBottom: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultric  es sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}
