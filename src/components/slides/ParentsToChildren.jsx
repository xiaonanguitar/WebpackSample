import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import FCComunication from './demo/FCComunication/index.jsx';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { rotateLeftIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: rotateLeftIn,
        animationDuration: '1s'
    }
});

class ParentsToChildren extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            showCode: false,
            showDemo: false,
            visible: false
        }
        this.handler = this.handler.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handler(flag) {
        if(flag){
            this.setState({
                showCode: true,
                showDemo: false
            })
        }else{
            this.setState({
                showCode: false,
                showDemo: true
            })
        }
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
                            <span>父组件向子组件通信：React数据流是单向的，父组件通过props向子组件传递信息</span>
                        </li>
                        <li>
                            <span>子组件向父组件通信：子组件使用this.props.fun调用父组件的函数，触发父组件状态刷新，从而导致子组件也会刷新</span>
                        </li>
                    </ul>
                    <div style={{textAlign:"center",margin:"20px"}}>
                        <Button type="primary" onClick={()=>this.handler(false)}>DEMO</Button>
                        <span style={{display:"inline-block",width:"20px",height:"20px"}}></span>
                        <Button type="primary" onClick={()=>this.showModal()}>Check Code</Button>
                    </div>
                    <div style={{display:this.state.showDemo?"block":"none"}}>
                        <FCComunication/>
                    </div>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        width={1000}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <img style={{width:"100%"}} src="../../images/FCCom.png"/>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ParentsToChildren