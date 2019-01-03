import React, { Component } from 'react';
import './index.css';

// this component shows the tabs on the top of the campaign details page

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }
    clickHandler = (e, index) => {
        console.log(index)
        this.setState({
            selected: index
        })
    }
    render() {
        return <div className='Tabs'>
            {this.props.tabs.map((tab, index) => {
                return <p
                    className={`${index === this.state.selected ? 'TabSelected' : null}`}
                    key={index}
                    onClick={(e) => this.clickHandler(e, index)}>
                    {tab}
                </p>
            })}
        </div>
    }
}

export default Tabs;