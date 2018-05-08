import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { exampleActionCreators } from "state/example/exampleActions";
import * as exampleSelectors from "state/example/exampleSelectors";


interface IProps {
    message: string;

    editMessage(msg: string): void;
    editMessageAsync(msg: string): void;
}

export class HelloWorld extends React.Component<IProps, void> {
    public static fetchData(store) {
        return store.dispatch(exampleActionCreators.editMessage("mounted server side"));
    }

    public componentDidMount() {
        this.props.editMessage("mounted client side");
        this.props.editMessageAsync(new Date().toTimeString());
    }

    public render() {
        return (
            <div className={"HelloWorld"}>
                <h1 className={"HelloWorld__title"}>Hello Rabbits!</h1>
                <div className={"HelloWorld__msgBox"}>message: {this.props.message}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    message: exampleSelectors.getMessage(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    exampleActionCreators,
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
