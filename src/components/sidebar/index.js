import React, { Component } from 'react';
import SideBarTab from '../sidebarTab';
import './index.css';
import InfoBox from '../infoBox';

// provides the tabs to the left, and the InfoBox in both views

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
                return <SideBarTab key={index} active={index === this.state.selected ? true : false} index={index} tab={tab} clickHandler={this.clickHandler} />
            })}
            <InfoBox />
        </div>
    }
}

export default SideBar;