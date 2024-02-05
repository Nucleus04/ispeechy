import React, { Component } from "react";


class TryForFree extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="cta-section">
                <div className="margin">
                    <div className="cta-section-container">
                        <h1 className="cta-hd">Try <span className="text-span">iSpeechy</span> for Free</h1>
                        <p className="p-cta">Transform your words into speech today - try iSpeechy now!</p>
                        <a href="#" className="btn-main w-button">Try for Free</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default TryForFree;