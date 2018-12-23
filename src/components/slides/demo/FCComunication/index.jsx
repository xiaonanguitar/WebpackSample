import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import './style.css';

class BtnController extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        let text = this.props.status?"STOP" : "START";
        return (
            <div className="btncontroller" onClick={()=>this.props.handler(this.props.status)}>
                <span>{text}</span>
            </div>
        )
    }
}

class FCComunication extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            start: false
        }
        this.handler = this.handler.bind(this)
    }

    handler(status) {
        this.setState({
            start: !status
        })
    }

    render() {
        let staus = this.state.start?'flag start':'flag stop';
        return (
            <div style={{width:"100%"}}>
                <div className="parent">
                    <div className="container">
                        <div className={staus}></div>
                        <BtnController handler={this.handler} status={this.state.start}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FCComunication