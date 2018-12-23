import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import LifeCircleDemo from './demo/LifeCircleDemo/index.jsx';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { rotateRightIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: rotateRightIn,
        animationDuration: '1s'
    }
});

class LifeCircleFlow extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            visible: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <img style={{width:"60%"}} className="logo" src="../../images/lifeCircle.png"/>
                    <span style={demoBtn}>
                        <Button type="primary" onClick={()=>this.showModal()}>DEMO</Button>
                    </span>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    width={1000}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <LifeCircleDemo/>
                </Modal>
            </div>
        )
    }
}

var demoBtn = {
    "display": "block",
    "width": "100%",
    "textAlign": "center",
    "margin": "20px"
}

export default LifeCircleFlow