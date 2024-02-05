import React, { Component } from "react";


class Mission extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <section id="features" className="section">
                <div className="margin">
                    <div className="features-section">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text">Our Mission to Revolutionize Productivity, Mobility and Accessibility</h2>
                            <div className="section-hd-line"></div>
                            <p className="hd-sub-text">iSpeechy will help you</p>
                            <div className="checked-feature-container">
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Digest Information</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                            </div>
                        </div>
                        <div className="features-container">
                            <div className="features-row">
                                <div className="features-col-text">
                                    <h4 className="h4">Short On Time? iSpeechy Helps You Read Faster.</h4>
                                    <p>Don't let your learning style limit you. For auditory learners, iSpeechy breaks down information barriers by converting webpages, research papers, and other documents into audiobooks. For visual learners, iSpeechy uses the Evelyn Wood Method to help you read 3X faster. Whether you're a visual learner, an auditory learner, or simply short on time, iSpeechy allows you to catch up on your reading.</p>
                                </div>
                                <div className="features-col-img">
                                    <img src="/section_01.jpg" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 40vw, 459px" srcSet="/section_01.jpg 500w, /section_01.jpg 760w" alt="" className="image-100" />
                                </div>
                            </div>
                            <div className="features-row reverse">
                                <div className="features-col-img">
                                    <img src="/section_02.jpg" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 40vw, 459px" srcSet="/section_02.jpg 500w, /section_02.jpg 760w" alt="" />
                                </div>
                                <div className="features-col-text">
                                    <h4 className="h4">Listen on the Go</h4>
                                    <p>Multitasking just got easier. With iSpeechy, you can listen to documents, reports, and industry news while you're commuting, working out, or doing managing other important tasks. This maximizes your time and allows you to learn keep working and stay informed even when you're on the go. Turn your commute into productive work sessions and effortlessly squeezing in information whenever it fits your schedule.</p>
                                </div>
                            </div>
                            <div className="features-row">
                                <div className="features-col-text">
                                    <h4 className="h4">Retain More Information:</h4>
                                    <p>According to research, listening to audiobooks can significantly improve memory and recollection. This capability concept is used by iSpeechy to assist you in better remembering important information. You'll find it easier to absorb and remember key details from documents, reports, and other online or offline content. Engage both your auditory and visual senses for increased comprehension and retention.</p>
                                </div>
                                <div className="features-col-img">
                                    <img src="/section_03.jpg" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 40vw, 459px" srcSet="/section_03.jpg 500w, /section_03.jpg 760w" alt="" />
                                </div>
                            </div>
                            <div className="features-row reverse">
                                <div className="features-col-img">
                                    <img src="/section_04-v2.jpg" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 40vw, 459px" srcSet="/section_04-v2.jpg 500w, /section_04-v2.jpg 760w" alt="" />
                                </div>
                                <div className="features-col-text">
                                    <h4 className="h4">Go Green + Reduce Your Eco-Impact</h4>
                                    <p>Make a difference in the environment while increasing your productivity. iSpeechy converts physical or digital documents into audiobooks, eliminating the need for printing and copying to reduce paper waste. This environmentally friendly method allows you to contribute to a greener planet while still enjoying the convenience and flexibility of audiobooks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="features-card-div">
                            <div className="features-card_container">
                                <div className="features-card v2">
                                    <div className="featurescard_content">
                                        <h3 className="h3">For Auditory Listeners</h3>
                                        <p className="p large">We turn text into audiobooks so you can get through your reading materials 2X or 3X faster</p>
                                    </div>
                                </div>
                                <div className="featureimage_container">
                                    <div className="featureimage">
                                        <img src="/v2_gif-animation-auditory-listener.gif" loading="lazy" alt="" className="image-100" />
                                    </div>
                                    <div className="feature-image-explanation">
                                        <p>iSpeechy converts your text into high-quality audiobooks, allowing you to consume information faster and more efficiently. This is very beneficial for auditory learners who absorb and retain information better through sound than through sight. Listening to audiobooks at 2x or 3x the speed of reading allows you to get through more material in less time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-card_container">
                                <div className="features-card v2">
                                    <div className="featurescard_content">
                                        <h3 className="h3">For Visual readers</h3>
                                        <p className="p large">We use the algorithm developed by the renowned educator Evelyn Wood to help you read 3X faster.</p>
                                    </div>
                                </div>
                                <div className="featureimage">
                                    <img src="/gif-animation-visual-listener_3-min.gif" loading="lazy" alt="" className="image-100" />
                                </div>
                                <div className="feature-image-explanation">
                                    <p>iSpeechy offers a revolutionary approach to accelerating your reading speed and comprehension for visual learners who thrive on processing information through text. We apply insights from renowned educator Evelyn Wood's groundbreaking speed reading method, allowing you to maximize the potential of your eyes and brain.</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-hd-div mt-5vw">
                            <div className="section-hd-w">
                                <h2 className="section-hd-text">How You Can Use iSpeechy To Relieve Your Reading Stress and Get More Done Each Day</h2>
                            </div>
                            <div className="section-hd-line"></div>
                            <div className="checked-feature-container">
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Digest Information</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                                <div className="checked-feature-div">
                                    <div className="icon-check">
                                        <img src="/Asset-1.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Read faster</div>
                                </div>
                            </div>
                        </div>
                        <div className="features-card-div">
                            <div className="features-card">
                                <div className="div-block">
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">Text-to-Speech Magic</h4>
                                    <p className="p">Text-to-Speech Magic by iSpeechy reads text from apps, websites, emails, and more, converting your digital content into clear audio. There will be no more straining your eyes or being distracted from your work. Allow iSpeechy to do the reading for you, making your online experiences more enjoyable and fruitful.</p>
                                    <div className="features-tagline">Turning words into wonders, one sound bite at a time.</div>
                                </div>
                            </div>
                            <div className="features-card">
                                <div className="div-block">
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">Speak Your Creation</h4>
                                    <p className="p">Never lose track of a thought or task again. iSpeechy effortlessly converts your spoken notes, reminders, and to-do lists into text, instantly transcribing your voice with its advanced speech recognition. Whether you're just brainstorming ideas, iSpeechy makes organization a breeze. Read along with your highlighted text for clarity, or simply let the app read it back to you for effortless multi-tasking.</p>
                                    <div className="features-tagline">Unleash your voice, create your masterpiece.</div>
                                </div>
                            </div>
                            <div className="features-card">
                                <div className="div-block">
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">On-the-Go Accessibility</h4>
                                    <p className="p">iSpeechy's On-the-Go Accessibility feature ensures you never miss a beat. Whether you're using your phone or desktop, iSpeechy keeps you connected to your content. Experience seamless integration with your digital world, and stay peachy keen wherever you are.</p>
                                    <div className="features-tagline">Your digital companion, anytime, anywhere.</div>
                                </div>
                            </div>
                            <div className="features-card">
                                <div className="div-block">
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">Peachy Keen Customization</h4>
                                    <p className="p">iSpeechy's Peachy Keen Customization allows you to tailor your experience with adjustable reading speed, voice selection, and more. Create your own unique iSpeechy experience to make your digital world truly yours.</p>
                                    <div className="features-tagline">A personalized touch for a peachier experience.</div>
                                </div>
                            </div>
                            <div className="features-card">
                                <div className="div-block">'
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">Voice Command Control</h4>
                                    <p className="p">With iSpeechy's Voice Command Control, you can easily navigate your digital content using voice commands. Pause, play, or skip through text, and enjoy hands-free control of your digital world. Discover a whole new level of convenience with iSpeechy.</p>
                                    <div className="features-tagline">Command your world with the power of your voice.</div>
                                </div>
                            </div>
                            <div className="features-card">
                                <div className="div-block">
                                    <img src="/Asset-53.svg" loading="lazy" alt="" />
                                </div>
                                <div className="div-block-9">
                                    <h4 className="h4">Privacy and Security</h4>
                                    <p className="p">Your privacy and security are our top priority. iSpeechy's Privacy and Security feature ensures your data is protected with end-to-end encryption, keeping your information safe and sound. Enjoy peace of mind knowing your digital world is safeguarded.</p>
                                    <div className="features-tagline">Keeping your peachy world secure and private.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Mission;