import React, { Component } from 'react';
// import faker from 'faker';
// import Comment from '../Components/Comment';

const ApprovalCard = (props) => {
    console.log(props.children);
    return (
        <React.Fragment>
            <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            {props.children}
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">Approve</div>
                                <div className="ui basic red button">Decline</div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default ApprovalCard;
