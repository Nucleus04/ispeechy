import React, { Component } from "react";

class Voice extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            playingIndex: 0,
        }
    }

    playVoice(index) {
        if (this.state.playingIndex === index) {
            this.setState({
                playingIndex: 0,
            })
        }
        else {
            this.setState({
                playingIndex: index,
            })
        }
    }
    render() {
        return (
            <section id="features" className="section">
                <div className="margin">
                    <div className="voices-section">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text">Have it be read to you in truly natural sounding voices</h2>
                            <div className="section-hd-line"></div>
                        </div>
                        <div className="voice-sample-card">
                            <div className="tts-widget-minimized">
                                <div className="div-block-7">
                                    <div className="backward-forward_div">
                                        <div className="btn_icon">
                                            <img src="/i_07.svg" loading="lazy" alt="" className="icon-image smaller opacity-70" />
                                        </div>
                                    </div>
                                    <div className="widgetbtn peach">
                                        <div className="widgetbtn-inner peach play">
                                            <img src="/Asset-22.svg" loading="lazy" alt="" />
                                        </div>
                                    </div>
                                    <div className="backward-forward_div">
                                        <div className="btn_icon">
                                            <img src="/i_08.svg" loading="lazy" alt="" className="icon-image smaller opacity-70" />
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-time">
                                    <div className="tts-timeduration-2">
                                        <div>00:10</div>
                                    </div>
                                    <div className="time-slider">
                                        <div className="groove">
                                            <div className="percent-track"></div>
                                            <div className="knob"></div>
                                        </div>
                                    </div>
                                    <div className="tts-timeduration-2">
                                        <div>0030</div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-6">
                                <div className="w-form">
                                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="8d094a17-c721-897d-b246-44ed8794ca87" aria-label="Email Form 2" className="">
                                        <div className="slider-container">
                                            <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
                                                <div className="w-slider-mask" id="w-slider-mask-1"><div className="slide w-slide" aria-label="1 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                    <div className="slider-div">
                                                        <div className="voice-content">
                                                            <div className="voice-pic"></div>
                                                            <div>Gwen (USA)</div>
                                                            <div className="text-block-6">Lorem ipsum</div>
                                                        </div>
                                                    </div>
                                                </div><div className="slide w-slide" aria-label="2 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="3 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="4 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="5 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="6 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="7 of 10" role="group" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div">
                                                            <div className="voice-content">
                                                                <div className="voice-pic"></div>
                                                                <div>Gwen (USA)</div>
                                                                <div className="text-block-6">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="8 of 10" role="group" aria-hidden="true" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div" aria-hidden="true">
                                                            <div className="voice-content" aria-hidden="true">
                                                                <div className="voice-pic" aria-hidden="true"></div>
                                                                <div aria-hidden="true">Gwen (USA)</div>
                                                                <div className="text-block-6" aria-hidden="true">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="9 of 10" role="group" aria-hidden="true" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div" aria-hidden="true">
                                                            <div className="voice-content" aria-hidden="true">
                                                                <div className="voice-pic" aria-hidden="true"></div>
                                                                <div aria-hidden="true">Gwen (USA)</div>
                                                                <div className="text-block-6" aria-hidden="true">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div className="slide w-slide" aria-label="10 of 10" role="group" aria-hidden="true" style={{ transform: "translateX(0px)", opacity: "1" }}>
                                                        <div className="slider-div" aria-hidden="true">
                                                            <div className="voice-content" aria-hidden="true">
                                                                <div className="voice-pic" aria-hidden="true"></div>
                                                                <div aria-hidden="true">Gwen (USA)</div>
                                                                <div className="text-block-6" aria-hidden="true">Lorem ipsum</div>
                                                            </div>
                                                        </div>
                                                    </div><div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div></div>
                                                <div className="left-arrow-2 w-slider-arrow-left" role="button" tabIndex="0" aria-controls="w-slider-mask-1" aria-label="previous slide">
                                                    <div className="widgetbtn small">
                                                        <div className="widgetbtn-inner no-shadow">
                                                            <img src="/i_13.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right-arrow-2 w-slider-arrow-right" role="button" tabIndex="0" aria-controls="w-slider-mask-1" aria-label="next slide">
                                                    <div className="widgetbtn small">
                                                        <div className="widgetbtn-inner no-shadow">
                                                            <img src="/i_14.svg" loading="lazy" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-nav-2 w-slider-nav w-round w-num">
                                                    <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 2" aria-pressed="true" role="button" tabIndex="0" style={{ marginRight: "3px", marginLeft: "3px" }}>1</div>
                                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 2" aria-pressed="false" role="button" tabIndex="-1" style={{ marginRight: "3px", marginLeft: "3px" }}>2</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-container">
                                            <div className="voice-top">
                                                <div className="voice-top-left">
                                                    <div className="search-form_container">
                                                        <img src="/i_15.svg" loading="lazy" alt="" className="icon-search" />
                                                        <input type="text" className="text-field-2 w-input" maxLength="256" name="name" data-name="Name" placeholder="Search Voice" id="name" />
                                                    </div>
                                                </div><label className="w-checkbox checkbox-field">
                                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                                                    <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} />
                                                    <span className="checkbox-label-2 w-form-label" htmlFor="checkbox">Checkbox</span>
                                                </label>
                                            </div>
                                            <div><select id="field-4" name="field-4" data-name="Field 4" className="language-field w-select">
                                                <option value="">US English</option>
                                                <option value="First">First choice</option>
                                                <option value="Second">Second choice</option>
                                                <option value="Third">Third choice</option>
                                            </select></div>
                                        </div>
                                    </form>
                                    <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form 2 success">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form 2 failure">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="8d094a17-c721-897d-b246-44ed8794caf6" style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1.04583, 1.04583, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d", willChange: "transform" }} className="text-block-7">Listen to different voice demo</div>
                        </div>
                        <div className="voice-sample-container">
                            <div className="col-voice-sample">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38adc" className="card-voice-sample _1" style={{ width: `${this.state.playingIndex === 1 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _1">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>Jane</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _1" onClick={() => this.playVoice(1)} style={{ display: `${this.state.playingIndex === 1 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small" >
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _1" onClick={() => this.playVoice(1)} style={{ display: `${this.state.playingIndex === 1 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _1 " style={{ display: `${this.state.playingIndex === 1 ? "block" : "none"}`, opacity: `${this.state.playingIndex === 1 ? "1" : "0"}`, transition: "ease-out 300ms" }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>As a product developer, I may have the best solutions and designs for my clients, but it only matters if I can convey them effectively. And in this journey, Murf has</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-voice-sample _2">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38af0" className="card-voice-sample _2" style={{ width: `${this.state.playingIndex === 2 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _2">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>Daniel</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _2" onClick={() => this.playVoice(2)} style={{ display: `${this.state.playingIndex === 2 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _2" onClick={() => this.playVoice(2)} style={{ display: `${this.state.playingIndex === 2 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _2" style={{ display: `${this.state.playingIndex === 2 ? "block" : "none"}` }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>With Murf’s text based studio, I can turn my className notes into lectures instantly. And I love that I can add different videos and images directly to my lecture, making Murf</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-voice-sample">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38b04" className="card-voice-sample _3" style={{ width: `${this.state.playingIndex === 3 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _3">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>Emma</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _3" onClick={() => this.playVoice(3)} style={{ display: `${this.state.playingIndex === 3 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _3" onClick={() => this.playVoice(3)} style={{ display: `${this.state.playingIndex === 3 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _3" style={{ display: `${this.state.playingIndex === 3 ? "block" : "none"}` }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>As a marketer, I am constantly on the lookout for quick and powerful ways to connect with our customers. Be it a presentation, ad, or a promo, Murf's</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-voice-sample _2">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38b18" className="card-voice-sample _4" style={{ width: `${this.state.playingIndex === 4 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _4">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>Michael</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _4" onClick={() => this.playVoice(4)} style={{ display: `${this.state.playingIndex === 4 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _4" onClick={() => this.playVoice(4)} style={{ display: `${this.state.playingIndex === 4 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _4" style={{ display: `${this.state.playingIndex === 4 ? "block" : "none"}` }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>Murf has transformed my writing process. As I hear the narration of my writing, I am able to understand how my readers would visualize my words. This helps me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-voice-sample">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38b2c" className="card-voice-sample _5" style={{ width: `${this.state.playingIndex === 5 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _5">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>Victoria</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _5" onClick={() => this.playVoice(5)} style={{ display: `${this.state.playingIndex === 5 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _5" onClick={() => this.playVoice(5)} style={{ display: `${this.state.playingIndex === 5 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _5" style={{ display: `${this.state.playingIndex === 5 ? "block" : "none"}` }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>As I am constantly trying to find creative ways to communicate with the audience, I alter the delivery of my material regularly. If it was not for Murf Studio, I would be</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-voice-sample _2">
                                <div data-w-id="faa50971-130a-b6b6-49e1-b177a9b38b40" className="card-voice-sample _8" style={{ width: `${this.state.playingIndex === 6 ? "238px" : this.state.playingIndex === 0 ? "130px" : "98px"}`, height: "220px", transition: "ease-out 300ms" }}>
                                    <div className="card-voice-sample-inner _6">
                                        <div className="voice-sample-preview">
                                            <div className="voice-sample-name">
                                                <div>William</div>
                                            </div>
                                            <div className="voice-sample-play-button-div">
                                                <div className="spchy_widgetbtn spchy_main spchy_small play _8" onClick={() => this.playVoice(6)} style={{ display: `${this.state.playingIndex === 6 ? 'none' : 'block'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/64ba39bbddf786d5fe4adcf8/64ba39bbddf786d5fe4add22_Asset%2022.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                                <div className="spchy_widgetbtn spchy_main spchy_small pause _8" onClick={() => this.playVoice(6)} style={{ display: `${this.state.playingIndex === 6 ? 'block' : 'none'}` }}>
                                                    <div className="spchy_widgetbtn-inner spchy_main spchy_play spchy_small">
                                                        <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297520_Asset%2042.svg" loading="lazy" alt="" className="spchy_image-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="voice-sample-expand _8" style={{ display: `${this.state.playingIndex === 6 ? "block" : "none"}` }}>
                                            <div className="voice-sample-transcript">
                                                <img src="https://uploads-ssl.webflow.com/65770c17ecacd11a80297484/65770c17ecacd11a80297521_Asset%2043.svg" loading="lazy" alt="" />
                                            </div>
                                            <div className="voice-sample-text-script">
                                                <p>And as a customer support professional, I am always seeking ways to converse with our customers productively. I do this by creating messages about our brand or product that our customers will</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Voice;