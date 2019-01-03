import React, { Component } from 'react';
import fbLogo from '../../assets/img/nanos/fb-logo.png';
import googleLogo from '../../assets/img/nanos/google.ico';
import instaLogo from '../../assets/img/nanos/instaicon.png';
import './index.css';

// this generates the images of each platform a particular campaign is running on

class Mediums extends Component {
    render() {
        const mediums = Object.values(this.props.advInfo).map(info => info.name)
        console.log(mediums)
        return <div className='Mediums'>
            {mediums.includes('facebook') ? <img src={fbLogo} alt='Facebook' /> : null}
            {mediums.includes('google') ? <img src={googleLogo} alt='Google' /> : null}
            {mediums.includes('instagram') ? <img src={instaLogo} alt='Instagram' /> : null}
        </div>
    }
}

export default Mediums;