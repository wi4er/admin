import React from 'react';
import PropTypes from 'prop-types';
import permissionContext from "../../permission/context/permissionContext";
import {Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField} from "@mui/material";


class AuthForm extends React.Component {
    static contextType = permissionContext;

    state = {
        userID: "admin@mail.com",
        password: "qwerty",
        error: "",
    };

    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    handleEdit = event => {
        const {target: {id, value}} = event;

        this.setState({[id]: value});
    }

    handleSend = event => {
        const {getToken} = this.context;
        const {userID, password} = this.state;

        event.preventDefault();

        getToken(userID, password)
            .then(() => this.setState({userID: "", password: "", error: null}))
            .catch(error => this.setState({error: error.message}));
    }

    renderAlert() {
        const {error} = this.state;

        if (!error) {
            return null;
        }

        return (
            <Alert severity="error">
                {error}
            </Alert>
        );
    }

    render() {
        const {userID, password} = this.state;
        const {token} = this.context;

        return (
            <Dialog
                open={!token}
                TransitionComponent={this.Transition}
                keepMounted
            >
                <DialogTitle>
                    {"Authorization"}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={"userID"}
                        label={"user email"}
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userID}
                        onChange={this.handleEdit}
                    />

                    <TextField
                        margin="dense"
                        id={"password"}
                        label={"password"}
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={this.handleEdit}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handleSend}>
                        Send
                    </Button>
                </DialogActions>

                {this.renderAlert()}
            </Dialog>
        );
    }
}

AuthForm.propTypes = {};

export default AuthForm;
