import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { swap } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: swap,
        animationDuration: '1s'
    }
});

class FirstUIComponent extends Component {

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
                    <ul>
                        <li>
                            <span>首先加载React库</span>
                        </li>
                        <li>
                            <span>Babel是一个ES6转换为ES5的库</span>
                        </li>
                        <li>
                            <span>注意Script标签的type需要指定为text/Babel</span>
                            <Button type="primary" onClick={this.showModal}>HelloReact</Button>
                        </li>
                    </ul>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    width={1000}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <h1>第一个组件</h1>
                    <div>
                        <iframe src="./HelloReact/index.html" style={{float:"left",width:"50%",display:"inline-block"}}></iframe>
                        <div style={{display:"inline-block",width:"50%",padding:"10px",fontSize:"16px"}}>
                            <span>代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。其中，react.js 是 React 的核心库，react-dom.js 是提供与 DOM 相关的功能，Browser.js 的作用是将 JSX 语法转为 JavaScript 语法</span>
                        </div>
                    </div>
                    <img style={{width:"100%"}} className="logo" src="../../images/helloReact.png"/>
                </Modal>
            </div>
        )
    }
}

export default FirstUIComponent