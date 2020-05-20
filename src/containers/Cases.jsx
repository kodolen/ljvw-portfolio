import React, { Component } from 'react';
import ljvwLight from '../assets/ljvw.png';
import redkiwi from '../assets/redkiwi.png';
import gl from '../assets/gl.jpg'
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
                        <p className="flat-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <span className="github">Check out all my other projects on <a href="#"><span>Github</span></a></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-10 off-md-1">
                        <div className="cases-container">

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${redkiwi})` }}>

                                </div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>Redkiwi</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="">Check out the <a href="#"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${ljvwLight})` }}></div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>LJVW Development</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="live">Check out the <a href="#"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${gl})` }}></div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>Guiding Light</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="live">Check out the <a href="#"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${ljvwLight})` }}></div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>Redkiwi</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="live">Check out the <a href="#"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${redkiwi})` }}></div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>Redkiwi</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="live">Check out the <a href="#"><span>live</span></a> version</span>
                                </div>
                            </div>

                            <div className="case">
                                <div className="case-preview" style={{ backgroundImage: `url(${redkiwi})` }}></div>
                                <div className="case-content">
                                    <span className="case">Case</span>
                                    <h3>Redkiwi</h3>
                                    <p className="case-text">Industriebouw is een vakblad voor de bouwsector dat tien keer per jaar verschijnt. Hun huidige website is al een tijd online en is gemaakt in Wordpress.</p>
                                    <span className="live">Check out the <a href="#"><span>live</span></a> version</span>
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