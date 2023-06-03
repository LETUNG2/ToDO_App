import React from "react";


class ComponentChild extends React.Component {
    /* 
    JSX =>> return block;
    Fragment(giai quyet render > 2 div )
    state: data can change, update realtime, not reload, is an object
    */
    state = {
        showJobs: false,

    }

    handleShowHide = (status) => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            }
        )
    }
    handleOnClickDelete = (job) => {
        console.log('>>> handleonclickdelete: ', job);
        this.props.deleteJob(job);
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs=true' : 'showJobs =false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}> Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ComponentChild = (props) => {
//     console.log(">>> check child props", props)
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     }
//                     )
//                 }
//             </div>
//         </>
//     )
// }

export default ComponentChild;
