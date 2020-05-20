import React, { Component } from 'react';
import { Waypoint } from "react-waypoint";

class About extends Component {

    render() {
        return (
            <div className="about-container" id="content-white">
                <Waypoint bottomOffset="400px" onEnter={() => {
                    let currentElement = document.getElementById("content-white");
                    currentElement.classList.add('show');
                }}
                />
                <div className="inner">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 off-md-1">
                            <h2>About me</h2>
                            <p className="flat-text">I have graduated as a graphic and interactive designer at the Grafisch Lyceum Rotterdam and currently I’m following the study Creative Media and Game Technologies at the Rotterdam University of applied science. During this study I have worked on different projects in which I have worked with different technologies, frameworks and programming languages. In the past years I've been heavily focusing on front-end development. At this moment I’m in my last year and I’m looking for a graduation internship.

                            I’m also active as a freelance web designer and web developer which has a positive effect on my development as a developer.
</p>
                        </div>
                        <div className="col-xs-12 col-md-3 off-md-1 content-wrapper">
                            <h2 className="target">I like to work with</h2>
                            <div className="prog-icon-wrapper">
                                <i className="devicon-javascript-plain"></i>
                                <i className="devicon-react-original"></i>
                                <i className="devicon-sass-original"></i>
                                <i className="devicon-git-plain"></i>
                            </div>
                            <h2 className="content-wrapper">Other interests</h2>
                            <p className="flat-text">I’m a huge fan of playing and watching football. That’s also why I love to play Football Manager and Fifa. I’m also a proud owner of a Playstation 4 and I play games like The Witcher, God of War and Bloodborne. I’m also a big fan of the TV shows Vikings and Dark.</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default About;