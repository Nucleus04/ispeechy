import React, { Component } from "react";


class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        return (
            <div className="cta-section">
                <div className="margin">
                    <div className="cta-section-container">
                        <h1 className="cta-hd">Get Started with <span className="text-span">iSpeechy</span></h1>
                        <p className="p-cta">Join the thousands of satisfied users who use iSpeechy for all their conversion needs!</p>
                        <a href="#" className="btn-main w-button">Get Started</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default GetStarted;