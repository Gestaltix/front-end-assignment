import React, { Component } from 'react';
import question from '../../assets/img/nanos/question.png';
import Status from '../status';
import './index.css'

// renders the small info box to the left of the view. I decided to include it in both views, because it provides useful information to both.

class InfoBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
        }
    }
    render() {
        return this.state.visible ? <div className='InfoBox'>
            <img src={question} alt='A question mark' />
            <p>If you see this it means your campaign is Paused</p>
            <Status status='Paused' />
            <p>If you see this it means your campaign is live</p>
            <Status status='Published' />
            <p onClick={() => this.setState({ visible: false })}>I don't need help.</p>
        </div>
            :
            null
    }
}

export default InfoBox;