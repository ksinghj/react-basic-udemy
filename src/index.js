import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Comment from '../src/Components/Comment';

const App = () => {
    return (
        <div className="ui container comments">
            <Comment name="Kartar" />
            <Comment />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
