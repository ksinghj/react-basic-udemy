import React, { Component } from 'react';
import faker from 'faker';

const Comment = (props) => {
    // state = { avatar:faker.image.avatar };
        return ( 
            <div className="comment">
                <a href="/" className="avatar">
                    <img className="avatar" src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.timeAgo}
                        </span>
                    </div>
                    <div className="text">{props.text}</div>
                </div>
            </div>
         );
}
 
export default Comment;
