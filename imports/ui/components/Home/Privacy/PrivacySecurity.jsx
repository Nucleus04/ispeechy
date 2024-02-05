import React, { Component } from "react";



class PrivacySecurity extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="section">
                <div className="margin">
                    <div className="partners-section">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text uppercase">Privacy AND&nbsp;SECURITY</h2>
                            <div className="section-hd-line"></div>
                        </div>
                        <div className="partners-text-content">
                            <p className="p">We have developed a very effective customized and proprietary language model algorithm that leverages several engines, including OpenAI GPT4 (the engine behind chatGPT) + PaLM, Meta's LLaMA and Google’s LaMDA.</p>
                        </div>
                        <div className="partners-logo-div">

                            <div className="privacy-icon"><img src="/privacy_01.svg" loading="lazy" alt="" />
                            </div>

                            <div className="privacy-icon"><img src="/privacy_02.svg" loading="lazy" alt="" />
                            </div>

                            <div className="privacy-icon"><img src="/privacy_03.png" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PrivacySecurity;