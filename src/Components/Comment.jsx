import React, { Component } from 'react';
import faker from 'faker';

class Comment extends Component {
    state = { 
        avatar: faker.image.avatar(),
        name: faker.name.firstName(),
        date: faker.date.weekday(),
        postText: faker.lorem.sentence()
     };
    render() { 
        return ( 
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.state.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.state.name}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {this.state.date}
                        </span>
                    </div>
                    <div className="text">{this.state.postText}</div>
                </div>
            </div>
         );
    }
}
 
export default Comment;
