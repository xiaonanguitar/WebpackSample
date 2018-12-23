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
            start: false,
            name: ""
        }
        this.handler = this.handler.bind(this)
    }

    componentWillMount() {
        console.log("componentWillMount")
        let _this = this
        fetch('./LifeCircleDemo/data/data.json')
        .then(res=>res.json())
        .then(res=>{
            setTimeout(function(){
                 _this.setState({
                    name: res.name
                })
            },5000)
        })
    }
    
    componentDidMount() {
        console.log("componentDidMount")
    }
    
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount")
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
                        <div className="name">
                            <span>
                                {this.state.name}
                            </span>
                        </div>
                        <BtnController handler={this.handler} status={this.state.start}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FCComunication