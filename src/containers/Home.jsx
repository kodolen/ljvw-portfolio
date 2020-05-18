import React, { Component } from 'react';
import RoundPic from '../assets/cutout-len.png';
import Github from '../assets/Github.svg';
import LinkedIN from '../assets/LinkedIN.svg';
import Mail from '../assets/Mail.svg';
import Arrow from '../assets/arrow.svg'
import DarkModeToggle from '../components/DarkModeToggle'


class Home extends Component {

    render() {
        return (
            <div className="home-container" id="home-container">
                <div className="social-wrapper">
                    <a href="https://github.com/kodolen/" target="_blank"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/lennart-van-welzen-b4ab42134/" target="_blank"><img src={LinkedIN} alt="" /></a>
                    <a href="mailto:lennartjvw@icloud.com"><img src={Mail} alt="" /></a>
                </div>
                <div className="intro">
                    <p className="subtitle">Lennart van Welzen</p>
                    <h1>FRONT-END DEVELOPER</h1>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="button-wrapper"></div>
                </div>
                <div className="round-pic">
                    <img src={RoundPic} alt="" />
                </div>
                <div className="switch-wrapper">
                    <DarkModeToggle />
                </div>
                <div className="arrow-wrapper bounce">
                    <img src={Arrow} alt="" />
                </div>
            </div>
        )
    };
}

export default Home;