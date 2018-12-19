import React, { Component } from 'react';
import SideBarTab from '../sidebarTab';
import './index.css';

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: ['Campaigns', 'Businesses', 'Payments'],
            selected: 0
        }
    }
    clickHandler = (index) => {
        this.setState({
            selected: index
        })
    }
    render() {
        return <div className='SideBar'>
            {this.state.tabs.map((tab, index) => {
                return <SideBarTab active={index === this.state.selected ? true : false} index={index} tab={tab} clickHandler={this.clickHandler} />
            })}
        </div>
    }
}

export default SideBar;