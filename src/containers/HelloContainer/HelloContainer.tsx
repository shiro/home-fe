import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HelloWorld from "components/HelloWorld/HelloWorld";
import { exampleActions } from "state/example/exampleActions";
import * as exampleSelectors from "state/example/exampleSelectors";
import { IRootState } from "state/redux/rootReducer";


type IProps = IStateProps & IDispatchProps;

export class HelloContainer extends React.Component<IProps, void> {
    public static fetchData(store) {
        return store.dispatch(exampleActions.editMessage("mounted server side"));
    }

    public componentDidMount() {
        this.props.editMessage("mounted client side");
        this.props.editMessageAsync(new Date().toTimeString());
    }

    public render() {
        const { message } = this.props;

        return (
            <HelloWorld message={message}/>
        );
    }
}

interface IStateProps {
    message: string;
}

const mapStateToProps = (state: IRootState): IStateProps => ({
    message: exampleSelectors.getMessage(state),
});

interface IDispatchProps {
    editMessage(msg: string): void;
    editMessageAsync(msg: string): void;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ...exampleActions,
}, dispatch);

export default connect<IStateProps, IDispatchProps>(
    mapStateToProps, mapDispatchToProps)(
    HelloContainer,
);
