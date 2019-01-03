import React, { Component } from 'react';
import globeThumbnail from '../../assets/img/nanos/globeThumbnail.png';
import './index.css';

// makes the tabs on the left side of the screen in both views

class SideBarTab extends Component {
    clickHandler = () => {
        this.props.clickHandler(this.props.index)
    }
    render() {
        return <div className={this.props.active ? 'Active SideBarTab' : 'SideBarTab'} onClick={this.clickHandler}>
            <img className='Thumbnail' src={globeThumbnail} alt='A globe' />
            <p>{this.props.tab}</p>
        </div>
    }
}

export default SideBarTab;