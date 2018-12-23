import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import './index.css';
import Frame from './frame';
import Slide01 from './slides/Slide01.jsx';
import Slide02 from './slides/Slide02.jsx';
import Slide03 from './slides/Slide03.jsx';
import Prop from './slides/Prop.jsx';
import State from './slides/State.jsx';
import FocusOnView from './slides/FocusOnView.jsx';
import VirtualDom from './slides/VirtualDom.jsx';
import JSExtension from './slides/JSExtension.jsx';
import FirstUIComponent from './slides/FirstUIComponent.jsx';
import ParentsToChildren from './slides/ParentsToChildren.jsx';
import LifeCircle from './slides/LifeCircle.jsx';
import LifeCircleFlow from './slides/LifeCircleFlow.jsx';
import Summary from './slides/Summary.jsx';
import Gallery from './slides/demo/Gallery/index.jsx';
import CodeSplit from './slides/demo/CodeSplit/index.jsx';

import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Frame}>
                    <IndexRoute component={Slide01}/>
                    <Route path="/slide01" component={Slide01}/>
                    <Route path="/slide02" component={Slide02}/>
                    <Route path="/slide03" component={Slide03}/>
                    <Route path="/state" component={State}/>
                    <Route path="/slide04" component={Prop}/>
                    <Route path="/FocusOnView" component={FocusOnView}/>
                    <Route path="/VirtualDom" component={VirtualDom}/>
                    <Route path="/JSExtension" component={JSExtension}/>
                    <Route path="/FirstUIComponent" component={FirstUIComponent}/>
                    <Route path="/ParentsToChildren" component={ParentsToChildren}/>
                    <Route path="/LifeCircle" component={LifeCircle}/>
                    <Route path="/LifeCircleFlow" component={LifeCircleFlow}/>
                    <Route path="/Summary" component={Summary}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/CodeSplit" component={CodeSplit}/>
                </Route>
            </Router>
        )
    }
}

export default App