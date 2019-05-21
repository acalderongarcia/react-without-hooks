import React from 'react';
import PropTypes from "prop-types";

//interface Meh{children?: ReactNode}
//interface Props{body: Meh}

class Content extends React.Component{
    static propTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const body = this.props;
        return (
            <div className="Content">
                {body.children}
            </div>
        );
    }
}

export default Content;
