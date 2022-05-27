import React from "react";

// form 

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //alert('Job:' + this.state.titleJob + '\nSalary: ' + this.state.salary);
        if (!this.state.titleJob || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('>>>>check data input:', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 111),
            titleJob: this.state.titleJob,
            salary: this.state.salary,
        });
        this.setState({
            id: '',
            titleJob: '',
            salary: '',
        })
    }

    render() {
        return (

            <form >
                <label htmlFor="fname">Job's Title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br />

                <input type="button"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent;