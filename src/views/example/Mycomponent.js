
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from './AddComponent';

class Mycomponent extends React.Component {

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
        // this.setState({
        //     arrJobs: this.state.arrJobs.push(job),
        // })
    }

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
export default Mycomponent;