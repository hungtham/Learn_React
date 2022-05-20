
import React from "react";

class Mycomponent extends React.Component {
    state = {
        name: 'Hieu',
        school: 'Ajou',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        let name = 'Eric';
        return (

            <div className="parent">

                <div className="First">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    {console.log('My name is', name)}
                    Hello my component, my name is {this.state['name']}
                </div>
                <div className="Second">
                    My school is: {this.state.school}
                </div>
            </div>

        )

    }
}
export default Mycomponent;