
import React from "react";

// show hide, manage job's infomation

class ChildComponent extends React.Component {

    //re-render
    state = {
        showJobs: false
    };


    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>>> check conditional: ', check);
        return (
            <>

                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    : //3 condition output using state: run code after && when showJobs is true
                    // must use <> </> : render block
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        // use 'key' avoid error when sorting or filtering,...
                                        <div key={item.id}>
                                            {item.id} - {item.titleJob} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}


export default ChildComponent;