import React, { Component } from 'react'
import Authorization from '../auth/login-register'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: "url(images/img_4.jpg)" }}>
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-left">


                                <div className="row row-mt-15em">
                                    <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
                                        <span className="intro-text-small">Welcome to Handy HobNob</span>
                                        <h1>Find friends. <br /> Do fun stuff. <br /><span>Do fun stuff with friends!</span></h1>
                                    </div>
                                    <Authorization/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}