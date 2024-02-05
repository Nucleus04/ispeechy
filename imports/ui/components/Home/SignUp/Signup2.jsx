import React, { Component } from "react";

class SignUp2 extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        return (
            <div className="cta-section">
                <div className="margin">
                    <div className="cta-section-container">
                        <h1 className="cta-hd">Sign Up for <span className="text-span">iSpeechy</span></h1>
                        <p className="p-cta">Experience the power of text-to-speech and speech-to-text conversion - sign up for iSpeechy now!</p>
                        <a href="#" className="btn-main w-button">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp2;