import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

import { StyleSheet, css } from 'aphrodite';
import { rotateUpIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: rotateUpIn,
        animationDuration: '1s'
    }
});

class Slide02 extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                <div className="mainContent">
                    <ul>
                        <li>React Summary</li>
                        <li>JSX</li>
                        <li>Data Flow</li>
                        <li>Component Comunication</li>
                        <li>Component Life-Circle</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Slide02