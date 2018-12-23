import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { twisterInDown } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: twisterInDown,
        animationDuration: '1s'
    }
});

class FocusOnView extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            visible: false,
            tag: "angular"
        }
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(tag) {
        if(tag === "angular") {
            this.setState({
                visible: true,
                tag: "angular"
            });
        }else{
            this.setState({
                visible: true,
                tag: "react"
            });
        }
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
        let src = this.state.tag === "angular"? "../../images/angularDireactive.png":"../../images/reactWidget.png"
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>React把用户界面抽象成单个组件的集合，如按钮Button，对话框Model，日期组件Calendar等等</span>
                        </li>
                        <li>
                            <span>与Angular不同，React更为轻量级，进行组件封装无需写一大堆HTML模板</span>
                            <a style={{display:"inline-block",margin:"0 10px"}} onClick={()=>this.showModal("angular")}>Angular</a>
                            <a style={{display:"inline-block",margin:"0 10px"}} onClick={()=>this.showModal("react")}>React</a>
                        </li>
                        <li>
                            <span>JS逻辑和HTML紧密相连，容易理解</span>
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
                    <img style={{width:"100%"}} src={src}/>
                </Modal>
            </div>
        )
    }
}

export default FocusOnView