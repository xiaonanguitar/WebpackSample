import React, { Component } from 'react';
import { Table, Input, Modal, Spin, Button, Popconfirm } from 'antd';
import _ from 'lodash';
import ReactSVG from 'react-svg';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import '../styles/slide01.css';

import { StyleSheet, css } from 'aphrodite';
import { spaceInUp } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: spaceInUp,
        animationDuration: '1s'
    }
});

class Slide01 extends Component {

    constructor(props, context) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.magic)}>
                {/*<ReactSVG path="../../images/logo.svg" className="logo"/>*/}
                <img className="logo" src="../../images/reactjs.png" />
                <a
                    href="https://facebook.github.io/react/"
                    className="mainpage_label" >
                    ReactJS Foundamentals
                </a>
                <span className="getStart"><Link to="/Gallery">Get Started</Link></span>
            </div>
        )
    }
}

export default Slide01