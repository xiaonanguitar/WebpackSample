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

class VirtualDom extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>Web页面是由一个个HTML元素嵌套组合而成的。当使用JavaScript来描述这些元素时，这些元素可以简单地被表示成纯粹的JSON对象</span>
                        </li>
                        <li>
                            <span>React把真实Dom树转换成JavaScript对象树，也就是Virtual DOM Tree</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default VirtualDom