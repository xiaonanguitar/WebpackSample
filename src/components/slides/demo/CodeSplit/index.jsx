import React, { Component } from 'react';
import { Button } from 'antd';
import _ from 'lodash';

class CodeSplit extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            component: null
        }
    }

    loader = () => {
        EntryPoint.run();
        this.setState({
            component:EntryPoint.component
        })
    }

    render() {
        return (
            <div style={{margin:"300px"}}>
                <Button onClick={()=>this.loader()}>Load</Button>
                {
                    this.state.component?
                    React.createElement(this.state.component,{}) : null
                }
            </div>
        )
    }
}

export default CodeSplit