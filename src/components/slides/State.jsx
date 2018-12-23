import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import Todolist from './Slide03.jsx';
import Clock from './demo/Clock/index.jsx';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { puffIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: puffIn,
        animationDuration: '1s'
    }
});

class State extends Component {

    constructor(props,context) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            todolist: false,
            clock: false
        }
    }

    handler(flag) {
        if(flag === "todolist") {
            this.setState({
                todolist: true,
                clock: false
            })
        }else{
            this.setState({
                todolist: false,
                clock: true
            })
        }
        
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>类似Props，使用this.state对组件状态进行访问</span>
                        </li>
                        <li>
                            <span>无论何时状态发生改变，使用this.setState()，组件将重新进行投递</span>
                        </li>
                    </ul>
                    <div style={{textAlign:"center",margin:"20px"}}>
                        <Button type="primary" onClick={()=>this.handler("todolist")}>AddTodolist</Button>
                        <div>&nbsp;&nbsp;</div>
                        <Button type="primary" onClick={()=>this.handler("clock")}>Clock</Button>
                    </div>
                    <div style={{display:this.state.todolist?"block":"none"}}>
                        <Todolist/>
                    </div>
                    <div style={{display:this.state.clock?"block":"none"}}>
                        <Clock/>
                    </div>
                </div>
            </div>
        )
    }
}

export default State