import React, {Component} from 'react';
import ReactDOM from "react-dom";

class Loader extends Component {
    state = {
        Module: null
    };

    componentDidMount() {
        const {variable, url} = this.props;

        fetch(url + "/admin/index.js")
            .then(res => res.text())
            .then(res => {
                eval(res);

                this.setState({Module: globalThis[variable].default})
            });
    }

    render() {
        const {Module} = this.state;

        if (Module) {
            return (
                <Module
                    {...this.props}
                />
            );
        }

        return (
            <div>
                {"LOAD"}
            </div>
        );
    }
}

export default Loader;
