import React, { Component } from "react";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        return (
            <div className="footer">
                <div className="margin">
                    <div className="footer-content">

                        <div className="footer-logo"><img src="/iSpeechy_newLogo.svg" loading="lazy" alt="" />
                        </div>
                        <div>All rights reserved 2023</div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Footer;