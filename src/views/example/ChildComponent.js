
import React from "react";

class ChildComponent extends React.Component {

    render() {
        console.log('>>>>>check props : ', this.props);
        //declare full 
        // let name = this.props.name;
        // let age = this.props.age;
        //shortcut
        let { name, age, school, arrJobs } = this.props;
        return (
            <>
                <div>
                    ChildComponent: {name} -  {age} - {school}
                </div>

                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                // use 'key' avoid error when sorting or filtering,...
                                <div key={item.id}>
                                    {item.id} - {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )

    }
}
export default ChildComponent;