import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Box} from "@mui/material";
import Loader from "../Loader";

class SwitchRoutes extends React.Component {
    renderItem(prop, key) {
        return (
            <Route
                path={"/admin" + prop.path}
                key={prop.path}
            >
                <Loader {...prop} />
            </Route>
        );
    }

    render() {
        const {routes} = this.props;

        return (
            <Box padding={2}>
                <Switch>
                    {routes.map(this.renderItem, this)}

                    <Redirect
                        strict
                        exact
                        from="/"
                        to="/admin/dashboard"
                    />
                </Switch>
            </Box>
        );
    }
}

export default SwitchRoutes;
