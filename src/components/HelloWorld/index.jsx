import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as exampleActions from "state/example/actions";
import * as exampleSelectors from "state/example/selectors";

export class HelloWorld extends React.Component {
    static propTypes = {
        editMessage: PropTypes.func,
        editMessageAsync: PropTypes.func,
        message: PropTypes.string,
    };

    componentDidMount() {
        this.props.editMessage("initial update");
        this.props.editMessageAsync(new Date().toTimeString());
    }

    render() {
        return (
            <div className={"HelloWorld"}>
                <h1 className={"HelloWorld__title"}>Hello all Rabbits!</h1>
                <div className={"HelloWorld__msgBox"}>message: {this.props.message}</div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        message: exampleSelectors.getMessage(state)
    };
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...exampleActions
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
