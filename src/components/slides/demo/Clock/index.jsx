import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.getTime = this.getTime.bind(this)
    this.setTimer = this.setTimer.bind(this)
    this.updateClock = this.updateClock.bind(this)
    this.state = this.getTime();
  }

  getTime() {
    const currentTime = new Date();
    var time = {};
    time.hours = currentTime.getHours();
    time.minutes = currentTime.getMinutes();
    time.seconds = currentTime.getSeconds();
    time.ampm = time.hours >= 12 ? 'pm' : 'am';
    return time
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    const currentTime = this.getTime();
    this.setState(currentTime)
    this.setTimer();
  }
  
  componentDidMount() {
    this.updateClock()
  }
  render() {

    const {hours, minutes, seconds, ampm} = this.state;
    return (
      <div className="clock">
        {
          hours === 0 ? 12 :
            (hours > 12) ?
              hours - 12 : hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        } {ampm}
      </div>
    )
  }
}

export default Clock