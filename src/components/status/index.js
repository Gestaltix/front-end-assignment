import React, { Component } from 'react';
import './index.css';

// This component provides the small status bubbles across the entire program

class Status extends Component {
    render() {
        return <div className={`Status ${this.props.status === 'Paused' ?
            'Paused' :
            this.props.status === 'Published' ?
                'Published' :
                'Reviewing'}`}>
            {this.props.status}
        </div>
    }
}

export default Status;