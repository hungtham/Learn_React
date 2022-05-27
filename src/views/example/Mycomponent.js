
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', titleJob: 'developer', salary: '2000' },
            { id: 'job2', titleJob: 'tester', salary: '2500' },
            { id: 'job3', titleJob: 'manager', salary: '5000' },
        ]

    };
    //add job from form
    addNewJob = (job) => {
        //let currentJob = this.state.arrJobs;
        console.log('check job from parent:', job);
        //method 1
        // this.setState({
        //     // arrJobs: [...this.state.arrJobs, job],
        // })
        //method 2
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            // arrJobs: [...this.state.arrJobs, job],
            arrJobs: currentJobs,
        })

    }
    //https://youtu.be/ev8uNM4SNx4?list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy&t=725
    render() {
        //console.log('>>>>>>Render : ', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )

    }
}
export default MyComponent;