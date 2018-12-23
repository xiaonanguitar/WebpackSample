import React, { Component } from 'react';
import _ from 'lodash';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

class Nav extends Component {
    constructor(props) {
        super(props)
        this.slides = [
            "/slide01",
            "/slide02",
            "/slide03"
        ]
        this.state = {
            prevPosition: "",
            curPosiition: "/slide01",
            nextPosition: "/slide02"
        }
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }
    prev() {
        let curPosiition =  _.findIndex(this.slides,function(chr){
           return chr === this.state.curPosiition
        }.bind(this))
        let prevPosition = 0;
        if(curPosiition>0){
            prevPosition =  curPosiition -1;
        }
        this.path = this.slides[prevPosition]
        this.setState({
            prevPosition: prevPosition===0?this.slides[0]:this.slides[prevPosition-1],
            curPosiition: this.slides[prevPosition],
            nextPosition: this.slides[prevPosition+1]
        })
    }
    next() {
        let curPosiition =  _.findIndex(this.slides,function(chr){
           return chr === this.state.curPosiition
        }.bind(this))
        let nextPosition = curPosiition;
        if(curPosiition<this.slides.length-1){
            nextPosition =  nextPosition + 1;
        }else{
            nextPosition = this.slides.length-1
        }
        this.path = this.slides[nextPosition]
        this.setState({
            prevPosition: this.slides[nextPosition-1],
            curPosiition: this.slides[nextPosition],
            nextPosition: nextPosition === this.slides.length-1? this.slides[nextPosition]: this.slides[nextPosition+1]
        })
    }
    render() {
        return (
            <nav>
                <span className="nav" onClick={()=>this.prev()}>
                    <Link to={this.state.prevPosition}>{"<"}</Link>
                </span>
                <span className="nav" onClick={()=>this.next()}>
                    <Link to={this.state.nextPosition}>{">"}</Link>
                </span>
            </nav>
        )
    }
}

export default Nav;