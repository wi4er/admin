import React, {Component} from 'react';
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {Link, withRouter} from "react-router-dom";

class MainMenu extends Component {
    render() {
        const {routes, history} = this.props;

        console.log(routes);
        
        
        return (
            <Box
                sx={{ width: 250 }}
                role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {routes.map((item, index) => (
                        <ListItem
                            button
                            key={item.name}
                            onClick={() => history.push("/admin" + item.path)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>

                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    }
}

export default withRouter(MainMenu);
