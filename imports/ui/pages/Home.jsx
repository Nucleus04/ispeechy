import React, { Component } from "react";
import Hero from "../components/Home/Hero/Hero";
import Navbar from "../components/Home/Navbar/Navbar";
import Signup from "../components/Home/SignUp/Signup";
import Voice from "../components/Home/Features/Voice/Voice";
import Mission from "../components/Home/Features/Mission/Mission";
import Pricing from "../components/Home/Pricing/Pricing";
import Purpose from "../components/Home/Purpose/Purpose";
import GetStarted from "../components/Home/GetStarted/GetStarted";
import Benefits from "../components/Home/Benifits/Benefits";
import HowItWork from "../components/Home/HowItWork/HowItWork";
import SignUp2 from "../components/Home/SignUp/Signup2";
import PrivacySecurity from "../components/Home/Privacy/PrivacySecurity";
import Guarantee from "../components/Home/Guarantee/Guarantee";
import Faq from "../components/Home/Faq/Faq";
import TryForFree from "../components/Home/TryForFree/TryForFree";
import Footer from "../components/Home/Footer/Footer";
import PopupVideo from "../components/Home/PopupVideo/PopupVideo";
import LoginRegistration from "../components/Home/PopupAuthentication/LoginRegistration";
import GotCode from "../components/Home/PopupGotCode/GotCode";


class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <Navbar />
                    <Hero />
                    <Signup />
                    <Voice />
                    <Mission />
                    <Pricing />
                    <Purpose />
                    <GetStarted />
                    <Benefits />
                    <Signup />
                    <HowItWork />
                    <SignUp2 />
                    <PrivacySecurity />
                    <Guarantee />
                    <Faq />
                    <TryForFree />
                    <Footer />
                    <PopupVideo />
                    <LoginRegistration />
                    <GotCode />
                </div>
            </div>
        )
    }
}



export default Home;