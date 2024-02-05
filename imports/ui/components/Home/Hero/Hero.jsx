import React, { Component } from "react";
import States from "../../../../api/classes/client/states/States";


const difference = 1140;
const NAME = 'HERO';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        States.setWatcher(this, NAME);
        this.state = {
            pictureTranslateX: 0,
            rightToThelast: false,
        }
    }

    leftClick() {
        if (this.state.pictureTranslateX < 0) {
            this.setState({
                pictureTranslateX: this.state.pictureTranslateX + difference,
            })
        } else {
            this.setState({
                pictureTranslateX: -6840,
            })
        }

    }

    rightClick() {
        if (this.state.pictureTranslateX > -6840) {
            this.setState({
                rightToThelast: false,
                pictureTranslateX: this.state.pictureTranslateX - difference,
            })
        } else {
            this.setState({
                pictureTranslateX: 0,
                rightToThelast: true,
            });
        }
    }
    componentDidMount() {
        const featureBtns = document.querySelectorAll('.feature-btn');
        featureBtns.forEach(featureBtn => {
            featureBtn.addEventListener('mouseenter', () => {
                const gifAnimation = featureBtn.querySelector('.gif-animation');
                gifAnimation.style.display = 'block';
            });
            featureBtn.addEventListener('mouseleave', () => {
                const gifAnimation = featureBtn.querySelector('.gif-animation');
                gifAnimation.style.display = 'none';
            });
        });
    }
    showVideo() {
        console.log("Showing video")
        States.setShowVideo();
    }
    render() {
        States.initiateWatch(NAME);
        return (
            <div className="hero-section">
                <div className="hero-content">
                    <div className="margin">
                        <div>
                            <div className="hero-container">
                                <div className="hero-text-div">
                                    <h1 className="h1">In today’s fast paced world time is of the essence.&nbsp;</h1>
                                    <h1 className="h1 sub">iSpeechy helps you read 2X faster.</h1>
                                    <div className="logo">
                                        <img src="/logo_v2.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="hero-subtext">
                                        <h3 className="h3-boom">Boom!</h3>
                                        <h3 className="h3">iSpeechy Brings Text to Life for You!</h3>
                                    </div>
                                </div>
                                <div className="mobile-elements">
                                    <div className="floating-text mobile">
                                        <h1 className="hero-h1 smaller">Text to Speech, Speech to Text</h1>
                                        <h3 className="hero-h1 anywhere">ANYWHERE</h3>
                                    </div>
                                    <div className="hero-video-div mobile">
                                        <div className="hero-video-label">
                                            <div className="hero-video-label-div white">
                                                <div>Click here...<br />see what it can do</div>
                                            </div>
                                            <div className="hero-video-arrow">
                                                <img src="/Asset-1_1.png" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div className="video-div">
                                            <div data-w-id="8d6486b9-9472-403b-b4b0-c8ca1db0ea90" className="video-button-div">
                                                <div className="video-button" >
                                                    <div className="main-btn" onClick={() => this.showVideo()}>
                                                        <div className="widgetbtn main orange">
                                                            <div className="widgetbtn-inner main play orange">
                                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec8861668_Asset%2022.svg" loading="lazy" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="pulse-border orange"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="desktop-hero-elements">
                                    <div className="floating-text desktop">
                                        <h1 className="hero-h1 smaller">Text to Speech, Speech to Text</h1>
                                        <h3 className="hero-h1 anywhere">ANYWHERE</h3>
                                    </div>
                                    <div className="hero-video-div desktop">
                                        <div className="hero-video-label">
                                            <div className="hero-video-arrow">
                                                <img src="/Asset-1_1.png" loading="lazy" alt="" />
                                            </div>
                                            <div className="hero-video-label-div white">
                                                <div>Click here...<br />see what it can do</div>
                                            </div>
                                        </div>
                                        <div className="video-div">
                                            <div data-w-id="6bff17c6-72be-8aa7-5318-82c81e57db44" className="video-button-div">
                                                <div className="video-button">
                                                    <div className="main-btn" onClick={() => this.showVideo()}>
                                                        <div className="widgetbtn main orange">
                                                            <div className="widgetbtn-inner main play orange">
                                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec8861668_Asset%2022.svg" loading="lazy" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="pulse-border orange"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-img-div">
                                        <div data-delay="4000" data-animation="slide" className="hero-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
                                            <div className="mask w-slider-mask" id="w-slider-mask-0">
                                                <div className="w-slide" aria-label="1 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 64vw, 561.578125px" srcSet="/v6_hero_01.jpg 500w, /v6_hero_01.jpg 760w" src="/v6_hero_01.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="what-text hide" aria-hidden="true">
                                                            <div aria-hidden="true">ADHD Focus Warriors</div>
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">iSpeech is a text-to-audio companion designed to streamline your work (and ease the strain on your eyes)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="2 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }}>
                                                    <div className="slide-content">
                                                        <div className="slider-image">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 496.71875px, 533.015625px" srcSet="/v6_hero_02-v2-p-800.png 500w, /v6_hero_02-v2-p-800.png 800w, /v6_hero_02-v2-p-800.png 1080w, /v6_hero_02-v2-p-800.png 1520w" src="/v6_hero_02-v2-p-800.png" loading="lazy" alt="" className="what-img" />
                                                        </div>
                                                        <div className="what-text">
                                                            <div>Ease into your productivity.</div>
                                                        </div>
                                                        <div className="hero-bot-text">
                                                            <h3 className="hero-bot-text-style">Catch up on work, news, or fun reading on the go</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="3 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 496.71875px, 533.015625px" srcSet="/v6_hero_03-p-800.jpg 500w, /v6_hero_03-p-800.jpg 800w, /v6_hero_03-p-800.jpg 1080w, /v6_hero_03-p-800.jpg 1520w" src="/v6_hero_03-p-800.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="what-text" aria-hidden="true">
                                                            <div aria-hidden="true">Create your own Playlists.</div>
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">Clip and sequence everything you want to read.</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="4 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 496.71875px, 533.015625px" srcSet="/v6_hero_04.jpg 500w, /v6_hero_04.jpg 760w" src="/v6_hero_04.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="what-text" aria-hidden="true">
                                                            <div aria-hidden="true">Make a list of everything you should have already read.</div>
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">Then listen to them in the car, on the plane, or on your next jog.</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="5 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 73vw, 576.546875px" srcSet="/v6_hero_05.jpg 500w, /v6_hero_05.jpg 760w" src="/v6_hero_05.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">Turn mountains of paperwork into audiobooks</h3>
                                                        </div>
                                                        <div className="what-text v2 hide" aria-hidden="true">
                                                            <div aria-hidden="true">iSpeechy helps you read 2X faster.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="6 of 7" role="group" style={{ transform: `translateX(${this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 68vw, 561.578125px" srcSet="/v6_hero_06.jpg 500w, /v6_hero_06.jpg 760w" src="/v6_hero_06.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="what-text hide" aria-hidden="true">
                                                            <div aria-hidden="true">Professionals</div>
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">Convert web pages, PDFs, Google Docs, emails and more into Audiobooks.</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-slide" aria-label="7 of 7" role="group" style={{ transform: `translateX(${this.state.rightToThelast ? "-7980" : this.state.pictureTranslateX}px)`, opacity: "1", transition: "transform 500ms ease 0s" }} aria-hidden="true">
                                                    <div className="slide-content" aria-hidden="true">
                                                        <div className="slider-image" aria-hidden="true">
                                                            <img sizes="(max-width: 767px) 81vw, (max-width: 991px) 50vw, 460.421875px" srcSet="/v6_hero_07.jpg 500w, images/v6_hero_07.jpg 760w" src="/v6_hero_07.jpg" loading="lazy" alt="" className="what-img" aria-hidden="true" />
                                                        </div>
                                                        <div className="what-text" aria-hidden="true">
                                                            <div aria-hidden="true">iSpeechy is used to REMEMBER MORE</div>
                                                        </div>
                                                        <div className="hero-bot-text" aria-hidden="true">
                                                            <h3 className="hero-bot-text-style" aria-hidden="true">Studies show that listening to audiobooks improves memory and recall, as well as help individuals and employees retain important information.</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">Slide 2 of 7.</div></div>
                                            <div className="left-arrow w-slider-arrow-left" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="previous slide">
                                                <div className="w-icon-slider-left" onClick={this.leftClick.bind(this)}></div>
                                            </div>
                                            <div className="right-arrow w-slider-arrow-right" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="next slide">
                                                <div className="w-icon-slider-right" onClick={this.rightClick.bind(this)}></div>
                                            </div>
                                            <div className="slide-nav w-slider-nav w-round">
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === 0 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 1 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === 0 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -1140 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 2 of 7" aria-pressed="true" role="button" tabIndex={`${this.state.pictureTranslateX === -1140 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -2280 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 3 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === -2280 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -3420 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 4 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === -3420 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -4560 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 5 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === -4560 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -5700 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 6 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === -5700 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                                <div className={`w-slider-dot ${this.state.pictureTranslateX === -6840 ? "w-active" : ""}`} data-wf-ignore="" aria-label="Show slide 7 of 7" aria-pressed="false" role="button" tabIndex={`${this.state.pictureTranslateX === -6840 ? "0" : "-1"}`} style={{ marginRight: "3px", marginLeft: "3px" }}></div>
                                            </div>
                                        </div>
                                        <div className="hero-app-screenshot"></div>
                                    </div>
                                    <div className="features-icon-div desktop">
                                        <div id="89b8ff26-d1a0-d1e3-25bc-3c2b13a817d3" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616c9_Asset%201.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Turn images to audiobook</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e6_1_mobile-min.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div id="89b8ff26-d1a0-d1e3-25bc-3c2b13a817db" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616cc_Asset%202.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Turn webpages to audiobook</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e4_2_Web.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div id="89b8ff26-d1a0-d1e3-25bc-3c2b13a817e3" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616ce_Asset%204.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Drag and drop file to listen</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e0_3_drag%20and%20drop.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div id="89b8ff26-d1a0-d1e3-25bc-3c2b13a817eb" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616d5_Asset%205.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Automatic speech recognition</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e5_4_asr-min.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-elements">
                                    <div className="features-icon-div mobile">
                                        <div data-w-id="b4de7cbf-efa0-5c95-5eb4-504114771c38" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616c9_Asset%201.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Turn images to audiobook</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e6_1_mobile-min.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div data-w-id="b4de7cbf-efa0-5c95-5eb4-504114771c40" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616cc_Asset%202.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Turn webpages to audiobook</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e4_2_Web.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div data-w-id="b4de7cbf-efa0-5c95-5eb4-504114771c48" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616ce_Asset%204.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Drag and drop file to listen</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e0_3_drag%20and%20drop.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                        <div data-w-id="b4de7cbf-efa0-5c95-5eb4-504114771c50" className="feature-btn">
                                            <div className="feature-btn-icon">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616d5_Asset%205.svg" loading="lazy" alt="" className="image-4" />
                                            </div>
                                            <div>
                                                <div>Automatic speech recognition</div>
                                            </div>
                                            <div className="gif-animation">
                                                <img src="https://uploads-ssl.webflow.com/655cd4e5aae5e25ec8861626/655cd4e5aae5e25ec88616e5_4_asr-min.gif" loading="lazy" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default Hero;