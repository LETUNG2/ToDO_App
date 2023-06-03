import React from "react";
import ComponentChild from "./ComponentChild";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    /* 
    JSX =>> return block;
    Fragment(giai quyet render > 2 div )
    state: data can change, update realtime, not reload, is an object
    props: truyen data cua react, la 1 bien
    */
    state = {
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'tester', salary: '400' },
            { id: 'job3', title: 'project managers', salary: '600' }
        ]
    }
    addNewJob = (job) => {
        this.setState(
            {
                arrJobs: [...this.state.arrJobs, job]

            }
        )

    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState(
            {
                arrJobs: currentJobs,

            }
        )
    }

    handleChangefName = (event) => {
        this.setState(
            {
                firstName: event.target.value
            })
    }

    handleChangelName = (event) => {
        this.setState(
            {
                lastName: event.target.value
            })
    }

    handleSummit = (event) => {
        event.preventDefault()
        console.log(" checked data input: ", this.state)
    }


    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ComponentChild

                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponent;
