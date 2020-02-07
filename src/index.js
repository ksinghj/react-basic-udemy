import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import Comment from '../src/Components/Comment';
import ApprovalCard from '../src/Components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment name="Kartar" timeAgo="today @ 3" avatar={faker.image.avatar()} text="some text"/>
            </ApprovalCard>
            <Comment name="Mike" timeAgo="today @ 5:12" avatar={faker.image.avatar()} text="some more text" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
