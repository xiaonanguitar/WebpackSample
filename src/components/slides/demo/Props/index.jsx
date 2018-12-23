import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import './style.css';

class SubMessages extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.msg.map(item=><li key={item}>{item}</li>)}
            </ul>
        )
    }
}

SubMessages.defaultProps = {
    msg: ["aaa"]
}

SubMessages.propTypes = {
    msg: PropTypes.array.isRequired
}


class MessageBox extends Component {

    constructor(props,context) {
        super(props)
        this.msg = ["1111","2222","3333"]
    }

    render() {
        return (
            <div style={{width:"100%"}}>
                <SubMessages msg={this.msg}/>
            </div>
        )
    }
}

export default MessageBox