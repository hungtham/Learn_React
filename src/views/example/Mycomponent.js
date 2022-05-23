
import React from "react";
import ChildComponent from "./ChildComponent";
class Mycomponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '2000$' },
            { id: 'job2', title: 'tester', salary: '2500$' },
            { id: 'job3', title: 'manager', salary: '5000$' },
        ]

    };
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert('FirstName:' + this.state.firstName + '\nLastName' + this.state.lastName);
    }
    render() {
        //console.log('>>>>>>Render : ', this.state);
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br />

                    <input type="button"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent name={this.state.firstName}
                    age={'25'}
                    school={'ajou'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )

    }
}
export default Mycomponent;