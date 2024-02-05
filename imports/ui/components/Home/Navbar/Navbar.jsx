import React, { Component } from "react";
import States from "../../../../api/classes/client/states/States";


const STATE = 'state';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        States.setWatcher(this, STATE);
    }

    showLogin() {
        States.setShowLogin();
    }
    render() {
        States.initiateWatch(STATE)
        return (
            <div className="navbar-div">
                <div className="navbar-div-container">
                    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                        <div className="nav-margin">
                            <div className="nav-container">
                                <div className="div-block-2">
                                    <a href="index.html" aria-current="page" className="brand w-nav-brand w--current">
                                        <img src="/iSpeechy_newLogo.svg" loading="lazy" alt="" />
                                    </a>
                                    <div className="nav-link2-div">
                                        <a href="/api-publishers-enterprise?tab=api" className="api-link">API</a>
                                        <a href="/api-publishers-enterprise?tab=publisher" className="punlisher-link">Publishers</a>
                                        <a href="/api-publishers-enterprise?tab=enterprise" className="enterprise-link">Enterprise Clients</a>
                                    </div>
                                </div>
                                <nav role="navigation" className="nav-menu w-nav-menu">
                                    <a href="/#features" className="nav-link w-nav-link">Features</a>
                                    <a href="/#pricing" className="nav-link w-nav-link">Pricing</a>
                                    <a href="/#who-is-it-for" className="nav-link w-nav-link">Who is it for?</a>
                                    <a href="/#benefits" className="nav-link w-nav-link">Benefits</a>
                                    <a href="/#how-does-it-work" className="nav-link w-nav-link">How Does It Work</a>
                                    <a href="/#guarantee" className="nav-link w-nav-link">Guarantee</a>
                                    <a href="/#faq" className="nav-link w-nav-link">FAQ</a>
                                    <div className="nav-btn-div">
                                        <a data-w-id="8faec24e-a1e0-a34c-dbc2-80014fb678ca" href="#" onClick={this.showLogin.bind(this)} className="nav-btn w-button">Login/ Signup</a>
                                    </div>
                                </nav>
                                <div className="menu-button w-nav-button" style={{ WebkitUserSelect: "text" }} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                                    <div className="w-icon-nav-menu"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div></div>
                </div>
            </div>
        )
    }
}



export default Navbar;