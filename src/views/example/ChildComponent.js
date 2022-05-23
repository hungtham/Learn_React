
import React from "react";

class ChildComponent extends React.Component {

    render() {
        return (
            <>
                <div>
                    ChildComponent: {this.props.name}
                </div>

            </>
        )

    }
}
export default ChildComponent;