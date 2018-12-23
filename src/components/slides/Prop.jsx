import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import MessageBox from './demo/Props/index.jsx';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { holeIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: holeIn,
        animationDuration: '1s'
    }
});

class Prop extends Component {

    constructor(props,context) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            visable: false
        }
    }

    handler() {
        this.setState({
            visable: !this.state.visable
        })
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>Props的传递是单向的，只能从父组件传给子组件</span>
                        </li>
                        <li>
                            <span>组件内通过this.props来获取属性内容</span>
                        </li>
                        <li>
                            <span>React提供getDefaultProps来设置默认属性值</span>
                        </li>
                        <li>
                            <span>
                                <a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html">
                                    React提供protype来进行类型校验
                                </a>
                            </span>
                        </li>
                    </ul>
                    <div style={{textAlign:"center",margin:"20px"}}>
                        <Button type="primary" onClick={()=>this.handler()}>DEMO</Button>
                    </div>
                    <div style={{display:this.state.visable?"block":"none"}}>
                        <MessageBox/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prop