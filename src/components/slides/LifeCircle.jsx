import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { vanishIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: vanishIn,
        animationDuration: '1s'
    }
});

class LifeCircle extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>react组件有两个状态，一个是渲染状态，一个是卸载状态，而渲染状态又分为初始渲染状态和重新渲染状态</span>
                        </li>
                        <li>
                            <span>开发人员一般只需要了解其中五个主要的生命周期函数：componentWillMount、componentDidMount、componentWillUpdate、componentDidUpdate、componentWillUnmount</span>
                            <div><Link to="/LifeCircleFlow"><span>Life circle flow</span></Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LifeCircle