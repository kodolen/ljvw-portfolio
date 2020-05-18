import React, { Component } from 'react';
import RoundPic from '../assets/cutout-len.png';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="intro">
                    <span>Lennart van Welzen</span>
                    <h1>FRONT-END DEVELOPER</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="button-wrapper"></div>
                </div>
                <div className="round-pic">
                    <img src={RoundPic} alt="" />
                </div>
            </div>
        )
    };
}

export default Home;