import React, { Component } from "react";



class Pricing extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isMonthlyShown: true,
            isShowComparison: false,
        }
    }
    choosingMonthlyPlan() {
        this.setState({
            isMonthlyShown: true
        })
    }

    choosingAnualPlan() {
        this.setState({
            isMonthlyShown: false
        })
    }

    showComparison(state) {
        this.setState({
            isShowComparison: state,
        })
    }

    render() {
        return (
            <section id="pricing" className="section pricing">
                <div className="margin">
                    <div className="pricing-section">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text">How much does it cost</h2>
                            <div className="section-hd-line"></div>
                            <p className="hd-sub-text">Compare iSpeechy versus other leading products</p>
                        </div>
                        <div className="subtab-pricingcontainer">
                            <div className="subtabs-pricing">
                                <div className="subtabsmenu-pricing">
                                    <div data-w-id="6a981e46-5650-70ea-d16c-e4973fe4a64c" className="subtablink-pricing current" style={{ color: `${this.state.isMonthlyShown ? "black" : "white"}`, backgroundColor: `${this.state.isMonthlyShown ? "white" : "transparent"}` }} onClick={this.choosingMonthlyPlan.bind(this)}>
                                        <div>Monthly</div>
                                    </div>
                                    <div data-w-id="8c5b747b-ef14-1ce9-43b8-fcdab036d71c" className="subtablink-pricing" style={{ color: `${this.state.isMonthlyShown ? "white" : "black"}`, backgroundColor: `${this.state.isMonthlyShown ? "transparent" : "white"}` }} onClick={this.choosingAnualPlan.bind(this)}>
                                        <div>Annual</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing_maincontainer">
                                <div className="tab-pricing-container">
                                    <div className="pricing-column">
                                        <div className="pricing-hd-row">
                                            <div className="pricing-column-label">
                                                <h4 className="h4">Price</h4>
                                            </div>
                                            <div className="pricing-main-card">
                                                <div className="pricing-table-hd">
                                                    <div className="card-pricing ispeechy">
                                                        <div className="competitor_logo">
                                                            <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a95746995ef83f64baaa_comp_01.svg" loading="lazy" alt="" />
                                                        </div>
                                                        <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                            <div className="price-original">$45</div>
                                                            <div className="pricing-price">$15<span className="span-asterisk">*</span></div>
                                                            <div className="price-subtext">/month</div>
                                                            <div>
                                                                <div className="pricelegend">* Limited Time  (Pro)</div>
                                                            </div>
                                                        </div>
                                                        <div className={`price-div_annual ${this.state.isMonthlyShown ? "display-none" : "display-flex"}`} >
                                                            <div className="pricing-price">$99<span className="span-asterisk">*</span></div>
                                                            <div className="price-original pos-left">$399</div>
                                                            <div className="price-subtext">/year</div>
                                                            <div>
                                                                <div className="pricelegend">* Limited Time (Pro)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-pricing">
                                                        <div className="competitor_logo">
                                                            <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a957b491bc9f941d2133_comp_02.png" loading="lazy" alt="" />
                                                        </div>
                                                        <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                            <div className="pricing-price">$39</div>
                                                            <div className="price-subtext">/month</div>
                                                        </div>
                                                        <div className={`price-div_annual ${this.state.isMonthlyShown ? "display-none" : "display-flex"}`}>
                                                            <div className="pricing-price">$312</div>
                                                            <div className="price-subtext">/year</div>
                                                        </div>
                                                        <div>
                                                            <div className="pricelegend">(Based on their Pro Plan)</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-pricing">
                                                        <div className="competitor_logo">
                                                            <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a95720e5d05ef7e20a9e_comp_03.png" loading="lazy" alt="" />
                                                        </div>
                                                        <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                            <div className="price-subtext mt-20">Not Available</div>
                                                        </div>
                                                        <div className={`price-div_annual ${this.state.isMonthlyShown ? "display-none" : "display-flex"}`}>
                                                            <div className="pricing-price">$139</div>
                                                            <div className="price-subtext">/year</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-pricing">
                                                        <div className="competitor_logo">
                                                            <img src="/comp_7.png" loading="lazy" alt="" />
                                                        </div>
                                                        <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                            <div className="pricing-price">$19.99</div>
                                                            <div className="price-subtext">/month</div>
                                                        </div>
                                                        <div className={`price-div_annual ${this.state.isMonthlyShown ? "display-none" : "display-flex"}`}>
                                                            <div className="pricing-price">$159.88</div>
                                                            <div className="price-subtext">/year</div>
                                                        </div>
                                                        <div className="pricelegend">(Based on their Premium Plan)</div>
                                                    </div>
                                                    <div className="card-pricing">
                                                        <div className="competitor_logo">
                                                            <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a9574fa057892b0b3873_comp_05.png" loading="lazy" alt="" />
                                                        </div>
                                                        <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                            <div className="pricing-price">$23</div>
                                                            <div className="price-subtext">/month</div>
                                                        </div>
                                                        <div className={`price-div_annual ${this.state.isMonthlyShown ? "display-none" : "display-flex"}`}>
                                                            <div className="pricing-price">$288</div>
                                                            <div className="price-subtext">/year</div>
                                                        </div>
                                                        <div className="pricelegend">(Based on their AI Voices -100 min Plan)</div>
                                                    </div>
                                                    <div className="card-pricing last">
                                                        <div className="competitor_logo">
                                                            <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a9583380fddf29c5ef13_comp_06.png" loading="lazy" alt="" />
                                                        </div>
                                                        <div className="price-div_onetime">
                                                            <div className="pricing-price">$699</div>
                                                            <div className="price-subtext smaller">One-time Payment</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`pricing-comparison ${this.state.isShowComparison ? "" : "display-none"}`}>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Free Plan</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Text to Speech</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">\
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Speech to Text</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Multiple Voice</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Multi Language</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Transcription</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Clip and Play</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Making Playlist</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Taking Screenshot</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Screen Recording</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Making Video Call</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Modifying Speed</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Fast Forward/Go Back</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Speed Read for Visual Learners</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Highlight and Track Paragraph</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Share your reading with others</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Pick Photos of Physical Textbooks and read them</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Create Bundle Photo to make an audio chapter</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Syncronize your reading across all devices</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Summarize your reading</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Simplify and explain complex subjects</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Custom Voices</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Privacy-enabled</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Click to Listen</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" /></div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Auto Scroll</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>iOs Version Available</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Android Version Available</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Desktop Version Available</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Chrome Extension Available</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Read files such as PDF, Microsoft Word, text documents and other 30+ document types</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Custom Color</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Upload Audio Files</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Transcribe in Real Time</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Maintain list of Transcriptions</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Full page Screenshot/Screen Snippets</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Recording Full Desktop</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Recording at Particular Window</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Recording from Camera</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Recording Desktop + Camera</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Connect with your Classmates</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                            <div className="pricing-comparison-row">
                                                <div className="pricing-comparison-row-label">
                                                    <div>Video and Audio Calls Available</div>
                                                </div>
                                                <div className="pricing-comparison-main">
                                                    <div className="pricing-comparison-col ispeechy">
                                                        <div className="icon-checkbox">
                                                            <img src="/price_check.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                    <div className="pricing-comparison-col"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`pricing-comparison-btn-div`}>
                                            <div className={`compare-plans-btn-div ${this.state.isShowComparison ? "display-none" : ""}`}>
                                                <a data-w-id="997bae48-4948-7f24-7d4a-4aa0a1c2db78" href="/#pricing" className="btn-main gray w-button" onClick={() => this.showComparison(true)}>Compare plans</a>
                                            </div>
                                            <div className={`${this.state.isShowComparison ? "" : "display-none"}`}>
                                                <a data-w-id="997bae48-4948-7f24-7d4a-4aa0a1c2db7b" href="/#pricing" className="btn-main gray w-button" onClick={() => this.showComparison(false)}>Hide Features</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="subtabs-pricing hide w-tabs">
                                <div className="subtabsmenu-pricing w-tab-menu" role="tablist">
                                    <a data-w-tab="Tab 1" className="subtablink-pricing w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="true">
                                        <div>Annual</div>
                                    </a>
                                    <a data-w-tab="Tab 2" className="subtablink-pricing w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                                        <div>Monthly</div>
                                    </a>
                                </div>
                                <div className="subtabscontent w-tab-content">
                                    <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0"></div>
                                    <div data-w-tab="Tab 2" className="w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                                        <div className="pricing_maincontainer">
                                            <div className="tab-pricing-container">
                                                <div className="pricing-column">
                                                    <div className="pricing-hd-row">
                                                        <div className="pricing-column-label">
                                                            <h4 className="h4">Price</h4>
                                                        </div>
                                                        <div className="pricing-main-card">
                                                            <div className="pricing-table-hd">
                                                                <div className="card-pricing ispeechy">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a95746995ef83f64baaa_comp_01.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-pricing">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a957b491bc9f941d2133_comp_02.png" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-pricing">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a95720e5d05ef7e20a9e_comp_03.png" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-pricing">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a95836a120e104ac330e_comp_04.png" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-pricing">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a9574fa057892b0b3873_comp_05.png" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-pricing last">
                                                                    <div className="competitor_logo">
                                                                        <img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a9583380fddf29c5ef13_comp_06.png" loading="lazy" alt="" />
                                                                    </div>
                                                                    <div className={`price-div_monthly ${this.state.isMonthlyShown ? "display-flex" : "display-none"}`}>
                                                                        <div className="pricing-price">$2.99</div>
                                                                        <div className="price-subtext">/month</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison">
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-comparison-row">
                                                            <div className="pricing-comparison-row-label">
                                                                <div>Lorem ipsum dolor sit amet, consectetu</div>
                                                            </div>
                                                            <div className="pricing-comparison-main">
                                                                <div className="pricing-comparison-col ispeechy">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="pricing-comparison-col">
                                                                    <div className="icon-checkbox"><img src="https://uploads-ssl.webflow.com/6571a5f7eb2079a15963ec8b/6571a5f7eb2079a15963ed1d_Asset%206.svg" loading="lazy" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-comparison-btn-div">
                                                        <div className={`compare-plans-btn-div  ${this.state.isShowComparison ? "" : ""}`}>
                                                            <a data-w-id="997bae48-4948-7f24-7d4a-4aa0a1c2dc89" href="/#pricing" className="btn-main gray w-button" onClick={() => this.showComparison(true)}>Compare plans</a>
                                                        </div>
                                                        <div className={`  ${this.state.isShowComparison ? "" : ""}`}>
                                                            <a data-w-id="997bae48-4948-7f24-7d4a-4aa0a1c2dc8c" href="/#pricing" className="btn-main gray w-button" onClick={() => this.showComparison(false)}>Hide Features</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}


export default Pricing;