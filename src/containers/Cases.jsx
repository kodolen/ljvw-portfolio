import React, { Component } from 'react';
import ljvwLight from '../assets/ljvw.png';
import redkiwi from '../assets/redkiwi.png';
import gl from '../assets/gl.jpg';
import UnkownEra from '../assets/unknownera.png';
import cog from '../assets/cog.png';
import dep from '../assets/dep.jpg';
import { Waypoint } from "react-waypoint";

class Home extends Component {

    render() {
        return (
            <div className="inner cases-bg" id="cases-bg">
                <Waypoint bottomOffset="400px" onEnter={() => {
                    let currentElement = document.getElementById("cases-bg");
                    currentElement.classList.add('show');
                }}
                />
                <div className="row">
                    <div className="col-xs-12 col-md-6 off-md-1 cases-title">
                        <h2>Cases</h2>
                        <p className="flat-text">In the past years I have worked on different projects. The projects shown below are school projects but also projects I did as an intern or a freelancer. I also have more projects on my Github page.</p>
                        <span className="github">Check out all my other projects on <a href="https://github.com/kodolen" target="_blank" rel="noopener noreferrer"><span>Github</span></a></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-10 off-md-1">
                        <div className="cases-container">

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${redkiwi})` }}>

                                </div>
                                <div className="case-content">
                                    <span className="case">Internship</span>
                                    <h3>Redkiwi</h3>
                                    <p className="case-text">As a front-end developer intern at Redkiwi I was part of the development team that was responsible for the new Redkiwi site.</p>
                                    <span className="live">Check out the <a href="https://www.redkiwi.nl/en/" target="_blank" rel="noopener noreferrer"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${ljvwLight})` }}></div>
                                <div className="case-content">
                                    <span className="case">Freelance</span>
                                    <h3>LJVW Development <span className='dev-light'>(Still in development)</span></h3>
                                    <p className="case-text">I have created this website for my work as a freelancer. It is created with React.js and I’m using the Contentful CMS and Netlify for deploying the site.</p>
                                    <span className="live">Check out the <a href="https://develop.ljvw.nl/" target="_blank" rel="noopener noreferrer"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${gl})` }}></div>
                                <div className="case-content">
                                    <span className="case">School project</span>
                                    <h3>Guiding Light</h3>
                                    <p className="case-text">This is a game created in Unity and is released on Steam. The studio behind the game is Corner Office Games and I was part of the development team.</p>
                                    <span className="live">Check out the <a href="https://store.steampowered.com/app/1203680/Guiding_Light/" target="_blank" rel="noopener noreferrer"><span>game</span></a> on Steam</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${cog})` }}></div>
                                <div className="case-content">
                                    <span className="case">School project</span>
                                    <h3>Corner Office Games</h3>
                                    <p className="case-text">Corner Office Games is the studio behind the game called Guiding light. I have created this website and it is made with React.js.</p>
                                    <span className="live">Check out the <a href="http://cornerofficegames.com/" target="_blank" rel="noopener noreferrer"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${dep})` }}></div>
                                <div className="case-content">
                                    <span className="case">School project</span>
                                    <h3>DEP Critics</h3>
                                    <p className="case-text">This is a web application where you can view and rate all teams and players of the Dutch Eredivisie. It is made with Laravel and makes use of an API, Database and user system.</p>
                                    <span className="live">Check out on <a href="https://github.com/kodolen/DEP-Critics" target="_blank" rel="noopener noreferrer"><span>Github</span></a></span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${UnkownEra})` }}></div>
                                <div className="case-content">
                                    <span className="case">School project</span>
                                    <h3>Unknown Era</h3>
                                    <p className="case-text">This is a game created in Unity and is released on the Play Store. The studio behind the game is Kimchi Productions and I was part of the development team.</p>
                                    <span className="live">Check out the <a href="https://play.google.com/store/apps/details?id=com.KimchiProductions.UnknownEra&hl=en_US" target="_blank" rel="noopener noreferrer"><span>game</span></a> on the Play Store</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;