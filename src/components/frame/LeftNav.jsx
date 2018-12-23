import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class Sider extends React.Component {
  handleClick(e) {
    console.log('clickEvent ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: "100%",margin: "0 0 50px 0"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
          <Menu.Item key="5"><Link to="/slide01">首页</Link></Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>React简介</span></span>}>
            <Menu.Item key="7"><Link to="/FocusOnView">初识React</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/VirtualDom">Virtual DOM</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/JSExtension">JSX语法</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>React组件</span></span>}>
            <Menu.Item key="12"><Link to="/FirstUIComponent">我们的第一个组件</Link></Menu.Item>
            <SubMenu key="sub2" title="React数据流"> 
                <Menu.Item key="1"><Link to="/slide04">Prop</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/state">State</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="组件间通信">
                <Menu.Item key="10"><Link to="/ParentsToChildren">父子组件通信</Link></Menu.Item>
                <Menu.Item key="13">跨级组件通信</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="生命周期">
                <Menu.Item key="11"><Link to="/LifeCircle">理解React组件的生命周期</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/LifeCircleFlow">完整生命周期流程</Link></Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="16"><Link to="/Summary">结束语</Link></Menu.Item>
      </Menu>
    );
  }
}

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fixed: false
        }
    }

    setFixed = (fixed) => {
        this.props.dock(fixed)
        this.setState({
            fixed: fixed
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.fixed?"navbar_left open fixed":"navbar_left"}>
                    {/*
                        <div style={{height:"100px"}}>
                            <span className="photo"></span>
                        </div>
                    */}
                    <figure>
                        <img 
                            src={this.state.fixed?"/images/Removefixed.png":"/images/fixed.png"} 
                            onClick={()=>this.setFixed(!this.props.leftOpen)}
                            style={{ width: '16px', right: '10px' }}
                        />
                            
                    </figure>
                    <Sider/>
                </div>
            </div>
        )
    }
}

export default LeftNav;