import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import MessageBox from './demo/Props/index.jsx';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { vanishIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: vanishIn,
        animationDuration: '1s'
    }
});

class Summary extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent" style={{backgroundColor:"#DE5044"}}>
                    <div className="title">Thank You!</div>
                    <div style={{fontSize:"35px",textAlign:"center"}}>Blog:&nbsp;<a href="xxx">xxxx</a></div>
                </div>
            </div>
        )
    }
}

export default Summary