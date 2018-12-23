import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { twisterInUp } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: twisterInUp,
        animationDuration: '1s'
    }
});

class JSExtension extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>JSX是JavaScript语法的扩展，支持我们编写看起来像HTML的JavaScript</span>
                        </li>
                        <li>
                            <span>不像常规的JS那样可以被浏览器直接解释执行，JSX需要在运行时需要有单独的编译器将其编译转换成常规JS再被执行</span>
                            <a style={{display:"inline-block",margin:"0 10px"}} href="http://babeljs.io">Babel Transformer</a>
                        </li>
                        <li>
                            <span>因为JSX是JavaScript，所以我们不能使用JS的保留字，比如Class</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default JSExtension