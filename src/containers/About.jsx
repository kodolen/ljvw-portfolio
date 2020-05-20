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
                            <p className="flat-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                        <div className="col-xs-12 col-md-3 off-md-1 content-wrapper">
                            <h2 className="target">I want to work with</h2>
                            <div className="prog-icon-wrapper">
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-react-original"></i>
                                <i class="devicon-sass-original"></i>
                                <i class="devicon-git-plain"></i>
                            </div>
                            <h2 className="content-wrapper">Other interests</h2>
                            <p className="flat-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default About;