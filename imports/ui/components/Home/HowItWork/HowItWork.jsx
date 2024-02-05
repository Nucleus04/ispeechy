import React, { Component } from "react";


class HowItWork extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <section id="how-does-it-work" className="section">
                <div className="margin">
                    <div className="how-it-works-container">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text">How it works</h2>
                            <div className="section-hd-line"></div>
                        </div>
                        <div className="how-it-works-text">
                            <p className="p">iSpeechy is a revolutionary app that harnesses the power of advanced text-to-speech and voice recognition technology to make digital content more accessible and user-friendly. By effortlessly converting written text into audio and spoken ideas into written documents, iSpeechy caters to a wide range of users, including those with learning differences, visual impairments, and diverse learning preferences. Once installed, the app seamlessly integrates with your devices, allowing you to enjoy the benefits of audio content and voice-to-text functionality across various platforms. Experience a new level of productivity and digital accessibility with iSpeechy, your go-to solution for transforming the way you engage with digital content.</p>
                        </div>
                        <div className="how-it-works-card-container">
                            <div className="how-it-works-card-div">
                                <div className="step-number">1</div>
                                <div className="how-it-works-card">

                                    <div className="how-it-works-img"><img src="/Asset-81.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="how-it-works-hd-text">Advanced text-to-speech technology</h4>
                                        <p className="p">Transform written content into immersive audio with iSpeechy's advanced text-to-speech capabilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="how-it-works-card-div">
                                <div className="step-number">2</div>
                                <div className="how-it-works-card">

                                    <div className="how-it-works-img"><img src="/Asset-82.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="how-it-works-hd-text">Voice recognition technology</h4>
                                        <p className="p">Effortlessly convert spoken ideas into text using iSpeechy's cutting-edge voice recognition features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="how-it-works-card-div">
                                <div className="step-number">3</div>
                                <div className="how-it-works-card">

                                    <div className="how-it-works-img"><img src="/Asset-83.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="how-it-works-hd-text">Seamless integration with devices</h4>
                                        <p className="p">Enjoy iSpeechy's audio and voice-to-text functions across devices for a consistent and user-friendly experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="step-number-line"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HowItWork;