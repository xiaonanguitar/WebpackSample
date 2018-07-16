import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(_.find([{id: 1}], {id:1}));
        return (
            <div className="container">I love my baby very much!</div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));