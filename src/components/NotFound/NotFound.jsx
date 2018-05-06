import React from "react";
import PropTypes from "prop-types";


class NotFound extends React.Component{
    static propTypes = {
        staticContext: PropTypes.object,
    };
    
    render(){
        if(this.props.staticContext)
            this.props.staticContext.res.status(404);
        
        return ("404 - Go elsewhere!");
    }
}


export default NotFound;