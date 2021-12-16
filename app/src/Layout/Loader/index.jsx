import React, {Component} from 'react';
import ReactDOM from "react-dom";
import context from "../../permission/context/permissionContext";

class Loader extends Component {
    static contextType = context;
    state = {
        Module: null
    };

    ref = React.createRef();

    componentDidMount() {
        const {variable, url} = this.props;

        fetch(url + "/admin/index.js")
            .then(res => res.text())
            .then(res => {
                eval(res);
                const Module = globalThis[variable].default;

                ReactDOM.render(
                    <Module
                        {...this.props}
                        {...this.context}
                    />,
                    this.ref.current,
                );
            });
    }

    render() {
        return (
            <div ref={this.ref} />
        );
    }
}

export default Loader;
