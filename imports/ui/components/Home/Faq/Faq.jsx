import React, { Component } from "react";


class Faq extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            faqIndex: '',
        }
    }


    onFaqClick(index) {
        if (index === this.state.faqIndex) {
            this.setState({
                faqIndex: '',
            })
        } else {
            this.setState({
                faqIndex: index,
            })
        }
    }
    render() {
        return (
            <section id="faq" className="section faq">
                <div className="margin">
                    <div className="faq-content">
                        <div className="section-hd-div">
                            <h2 className="section-hd-text">Frequently Asked Questions</h2>
                            <div className="section-hd-line"></div>
                        </div>
                        <div className="faq-container">
                            <div className="faq-item" onClick={() => this.onFaqClick(0)}>
                                <div data-w-id="3680099e-4175-552f-d118-f9e2be48f955" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">What is iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 0 ? "" : "display-none"}`} >
                                    <p className="p">iSpeechy is a versatile app that reads text from websites, emails, apps, and other documents on your phone or desktop. It also allows you to generate documents, emails, meeting notes, and more by converting your speech into text. iSpeechy is designed to cater to various user needs, making digital content more accessible and enjoyable for everyone.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(1)}>
                                <div data-w-id="c5b03784-c059-a8e9-8a7d-cf65de8d2678" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">How does iSpeechy work?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 1 ? "" : "display-none"}`}>
                                    <p className="p">iSpeechy uses advanced text-to-speech and voice recognition technology to convert written content into audio and spoken ideas into written text. Once installed, iSpeechy seamlessly integrates with your devices, allowing you to enjoy the benefits of audio content and voice-to-text functionality.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(2)}>
                                <div data-w-id="c7dae445-9e22-aa18-deb6-1ed4979a5dae" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">What are the benefits of using iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 2 ? "" : "display-none"}`}>
                                    <p className="p">iSpeechy saves time and improves productivity by allowing you to listen to written content instead of reading it. It's also useful for individuals with visual impairments or reading difficulties.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(3)}>
                                <div data-w-id="d81531af-e0f8-34e3-a291-ac2f17b69547" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Is iSpeechy suitable for people with learning differences or disabilities?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 3 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy is designed to cater to diverse users, including individuals with ADHD, dyslexia, visual impairments, and those who prefer auditory learning. By providing audio alternatives to written content, iSpeechy makes digital content more accessible and inclusive.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(4)}>
                                <div data-w-id="3f9ac1fd-6059-5ebd-702d-ef27ed357953" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Can I customize the voice and reading speed in iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 4 ? "" : "display-none"}`}>
                                    <p className="p">Absolutely! iSpeechy offers various customization options, including adjustable reading speed and voice selection, allowing you to create the most comfortable and enjoyable listening experience tailored to your preferences.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(5)}>
                                <div data-w-id="a18b1cd5-c2f2-4cb4-22c5-8f37e22a6887" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">How does iSpeechy ensure my privacy and security?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 5 ? "" : "display-none"}`}>
                                    <p className="p">iSpeechy prioritizes user privacy and security by employing robust encryption methods and adhering to strict data protection policies. Your personal information and content are safeguarded to ensure a safe and secure user experience.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(6)}>
                                <div data-w-id="70cc03d4-25dd-90bb-0247-ff6e713c6b5c" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Is iSpeechy available for both mobile and desktop devices?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 6 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy is designed to work seamlessly on both mobile devices (smartphones, tablets) and desktop computers. It integrates with various apps, websites, and emails on your devices, providing a consistent user experience across platforms.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(7)}>
                                <div data-w-id="9725de8d-54b9-f7ab-e02f-2c6190430020" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">How can I use iSpeechy to improve my productivity?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 7 ? "" : "display-none"}`}>
                                    <p className="p">iSpeechy's voice-to-text feature allows you to effortlessly convert spoken ideas into written documents, emails, and notes, freeing up valuable time for other tasks. Additionally, the text-to-speech feature enables multitasking by allowing you to listen to content while performing other activities.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(8)}>
                                <div data-w-id="7fa4a950-be81-b6ea-a642-980411381ca3" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Can I use iSpeechy to learn a new language?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 8 ? "" : "display-none"}`}>
                                    <p className="p">While iSpeechy is not specifically designed for language learning, it can still be a useful tool for those looking to improve their pronunciation, listening skills, and overall fluency by listening to text in their target language.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(9)}>
                                <div data-w-id="ea01a068-e856-24ad-e092-897ac9ba952e" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Can I customize the settings on iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 9 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy offers customizable voice options, playback speeds, and volume settings to suit individual preferences.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(10)}>
                                <div data-w-id="30dbb596-3aa4-fd7e-e0cb-00c06be8801a" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">What languages does iSpeechy support?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 10 ? "" : "display-none"}`}>
                                    <p className="p">iSpeechy supports multiple languages, including English, Spanish, French, German, Italian, and Portuguese, among others.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(11)}>
                                <div data-w-id="498beae9-a84a-dc8b-24d0-eca560f33c0d" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Is iSpeechy easy to use?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 11 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy is designed to be user-friendly and easy to navigate.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(12)}>
                                <div data-w-id="d62fd80b-2c20-f7ac-c091-78691900f0e5" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Can I use iSpeechy on multiple devices?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 12 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy can be used on multiple devices, including desktop computers, laptops, tablets, and smartphones.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(13)}>
                                <div data-w-id="fa195fed-b334-73d0-988d-3a7918bc0007" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Is customer support available for iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 13 ? "" : "display-none"}`}>
                                    <p className="p">Yes, iSpeechy offers customer support via email and online chat to assist with any technical issues or questions.</p>
                                </div>
                            </div>
                            <div className="faq-item" onClick={() => this.onFaqClick(14)}>
                                <div data-w-id="11c624fa-1485-9ae8-3dc6-88f87a439ad9" className="faq-question">

                                    <div className="faq-arrow"><img src="/Asset-90.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="faq-question-text">
                                        <h4 className="faq-h4">Are there any limitations to the amount of content I can convert with iSpeechy?</h4>
                                    </div>
                                </div>
                                <div className={`faq-answer ${this.state.faqIndex === 14 ? "" : "display-none"}`}>
                                    <p className="p">Our free plan has some limitations on the amount of content you can convert per day, but our premium plans offer unlimited usage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Faq;