import React from 'react';
import PropTypes from 'prop-types';
import permissionContext from "./permissionContext";

class PermissionProvider extends React.Component {
    state = {
        user: null,
        token: null,
    };

    componentDidMount() {
        const token = this.loadToken();

        return Promise.resolve(token)
            .then(token => {
                if (token) {
                    this.setState({token});
                    this.getUser(token);
                }
            });
    }

    getUser(authorization) {
        const {url} = this.props;

        return fetch(
            `${url}/user/myself/`,
            {
                headers: {authorization}
            }
        )
            .then(resp => resp.json())
            .then(user => this.setState({user}));
    }

    getToken(id, password) {
        const {url} = this.props;

        return fetch(
            `${url}/token/password/${id}/`,
            {
                headers: {password}
            }
        )
            .then(resp => {
                if (String(resp.status)[0] > 3) {
                    throw new TypeError("Wrong user data!");
                }

                return resp.text();
            })
            .then(token => {
                this.saveToken(token);
                this.setState({token});
                return this.getUser(token);
            });
    }

    saveToken(token) {
        localStorage.setItem("token", token);
    }

    loadToken() {
        return localStorage.getItem("token");
    }

    render() {
        const {children} = this.props;
        const {user, token} = this.state;

        return (
            <permissionContext.Provider value={{
                user: user,
                token: token,
                getToken: this.getToken.bind(this),
            }}>
                {children}
            </permissionContext.Provider>
        );
    }
}

PermissionProvider.propTypes = {};

export default PermissionProvider;
