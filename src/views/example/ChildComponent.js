
import React from "react";

class ChildComponent extends React.Component {

    render() {
        console.log('>>>>>check props : ', this.props);
        //declare full 
        // let name = this.props.name;
        // let age = this.props.age;
        //shortcut
        let { name, age } = this.props;
        return (
            <>
                <div>
                    ChildComponent: {name} -  {age}
                </div>

            </>
        )

    }
}
export default ChildComponent;