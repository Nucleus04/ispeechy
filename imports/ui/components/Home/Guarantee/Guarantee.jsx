import React, { Component } from "react";

class Guarantee extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <section id="guarantee" className="section">
                <div className="margin">
                    <div className="guarantee-content">
                        <div className="guarantee-card">

                            <div className="guarantee-icon"><img src="/640a102dd125d21246419eca_100-guaranteed.svg" loading="lazy" alt="" />
                            </div>
                            <div className="guarantee-text">
                                <h4>Quality High-Five</h4>
                                <p className="p bigger">Our software is a slam dunk when it comes to accurately converting your text into audible speech with clear and natural sounding voices. And if you encounter any issues, give us a shout and we'll work together to get it resolved in no time.</p>
                            </div>

                            <div className="guarantee-card-tail"><img src="/Asset-89.svg" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Guarantee;