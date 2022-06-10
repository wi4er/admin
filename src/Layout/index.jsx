import React, {Component} from 'react';
import SettingsProvider from "../theme/SettingsProvider";
import PermissionProvider from "../permission/context/PermissionProvider";
import {AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwitchRoutes from "./SwitchRoutes";
import MainMenu from "./MainMenu";
import AuthForm from "../permission/AuthForm";

class Layout extends Component {
    state = {
        list: [],
        auth: null,
        menuOpen: false,
    };

    componentDidMount() {
        Promise.all([
            fetch(process.env.PUBLIC_URL + "/services.json")
                .then(result => result.json()),
            fetch(process.env.PUBLIC_URL + "/auth.json")
                .then(result => result.json())
        ]).then(([list, auth]) => this.setState({list, auth}));
    }

    render() {
        const {list, auth, menuOpen} = this.state;

        return (
            <SettingsProvider>
                <PermissionProvider {...auth}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
                                onClick={() => this.setState({menuOpen: true})}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{flexGrow: 1}}
                            >
                                Maxik API
                            </Typography>

                            <Button color="inherit">
                                Login
                            </Button>
                        </Toolbar>
                    </AppBar>


                    <SwitchRoutes routes={list}/>

                    <Drawer
                        anchor={"left"}
                        open={menuOpen}
                        onClose={() => this.setState({menuOpen: false})}
                    >
                        <MainMenu routes={list}/>
                    </Drawer>

                    <AuthForm/>
                </PermissionProvider>
            </SettingsProvider>
        );
    }
}

export default Layout;
