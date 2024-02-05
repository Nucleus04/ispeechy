import React, { Component } from "react";
import States from "../../../../api/classes/client/states/States";

const NAME = "authentication";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        States.setWatcher(this, NAME);
        this.state = {
            email: '',
        }
    }
    onEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    onSignin() {
        console.log(this.state.email);
        States.setShowLogin();
        if (this.state.email) {
            States.setSignupEmail(this.state.email);
        }
    }
    render() {
        States.initiateWatch(NAME);
        return (
            <div className="sign-up-section">
                <div className="email-form">
                    <div className="email-form-block w-form">
                        <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" className="email-sign-up-form" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="14c9ced7-12f2-72bc-d5e0-e6c251e3ff86" aria-label="Email Form 3">
                            <div className="email-sign-up-text">Sign Up with Email Address</div>
                            <div className="email-sign-up-input">
                                <input type="text" className="text-field-3 mobile-mb-10 w-input" maxLength="256" name="field-3" data-name="Field 3" placeholder="Email Address" id="field-3" required="" onChange={this.onEmailChange.bind(this)} value={this.state.email} />
                                <input type="text" value="Sign Up" onChange={() => { }} data-wait="Please wait..." className="btn-main-2 smaller w-button" onClick={this.onSignin.bind(this)} />
                            </div>
                        </form>
                        {/* <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form 3 success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form 3 failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div> */}
                    </div>
                    <div>No credit card required</div>
                </div>
            </div>
        )
    }
}


export default Signup;