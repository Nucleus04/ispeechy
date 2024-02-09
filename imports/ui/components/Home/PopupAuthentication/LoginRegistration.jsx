import React, { Component } from "react";
import States from "../../../../api/classes/client/states/States";
import Authentication from "../../../../api/classes/client/authentication/Authentication";
import { withTracker } from "meteor/react-meteor-data";
import { Capitalize, SanitizeEmail, SanitizeName, validatePassword } from "./utility/sanitize";

const STATE = "state";
class LoginRegistration extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        States.setWatcher(this, STATE);
        this.state = {
            isSigningIn: true,
            email: "",
            password: "",
            name: "",
            isSuccesful: null,
            showVerificationModal: false,
            verificationCode: [],
            isVerificationSuccessful: true,
        }
    }


    switchLoginLogout() {
        this.setState({
            isSigningIn: !this.state.isSigningIn,
            isSuccesful: null,
        })
    }

    closeLogin() {
        States.setShowLogin();
    }

    async login(event) {
        event.preventDefault();
        const isEmailValid = SanitizeEmail(this.state.email);
        const isPasswordValid = validatePassword(this.state.password);

        if (!isEmailValid || !isPasswordValid) {
            if (!isEmailValid) alert("Invalid Email");
            if (!isPasswordValid) alert("Invalid Password");
        } else {
            const Account = await Authentication.accountVerification(this.state.email);
            if (Account.isVerified) {
                const isSuccesful = await Authentication.login(this.state.email, this.state.password);
                this.setState({
                    isSuccesful: isSuccesful,
                })
                if (isSuccesful) {
                    alert("Login successfully");
                    States.setShowLogin();
                }
            } else {
                alert(Account.message);
            }
        }

    }

    async signup(event) {
        event.preventDefault();
        const isNameValid = SanitizeName(this.state.name);
        const isEmailValid = SanitizeEmail(this.state.email);
        const isPasswordValid = validatePassword(this.state.password);

        if (!isNameValid || !isEmailValid || !isPasswordValid) {
            if (!isEmailValid) alert("Email is not valid");
            if (!isNameValid) alert("Name is not valid");
            if (!isPasswordValid) alert("Password is not valid");
        } else {
            const name = Capitalize(this.state.name);
            const isSuccesful = await Authentication.signup(name, this.state.email, this.state.password);
            if (isSuccesful) {
                this.setState({
                    isSuccesful: isSuccesful,
                    showVerificationModal: true,
                })
            } else {
                this.setState({
                    isSuccesful: false,
                    showVerificationModal: false,
                });
            }
        }
    }
    handleVerificationCodeChange = (e, index) => {
        const { value } = e.target;
        this.setState(prevState => {
            const newCode = prevState.verificationCode;
            newCode[index] = value;
            return { verificationCode: newCode };
        });
    };

    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    async verifyCode() {
        try {
            let isVerified = await Authentication.verify(this.state.verificationCode.join(''));
            if (!isVerified) {
                this.setState({
                    isVerificationSuccessful: false,
                })
            } else {
                this.setState({
                    isSigningIn: true,
                    isSuccesful: true,
                })
            }
        } catch (error) {
            this.setState({
                isVerificationSuccessful: false,
            })
        }
    }

    render() {
        return (
            <div className={`popup_loginsignup ${States.showLogin ? "" : "display-none"}`} >
                <div className={`popup_signin ${this.state.isSigningIn ? "display-flex" : "display-none"}`}>
                    <div className="w-form">
                        <form id="email-form" onSubmit={this.login.bind(this)} name="email-form" data-name="Email Form" method="post" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="e43dec5b-6b16-d7a2-4f0f-8bf1f16ac6f1" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Log in</h3>
                                    <p className="p">Input your details below:</p>
                                </div>
                            </div>
                            <input type="text" className="popup_from-textfield w-input" maxLength="256" required onChange={this.onInputChange.bind(this)} value={this.state.email} name="email" data-name="Name 3" placeholder="Email" id="name-3" />
                            <input type="password" className="popup_from-textfield w-input" maxLength="256" required onChange={this.onInputChange.bind(this)} value={this.state.password} name="password" data-name="Name 2" placeholder="Password" id="name-2" />
                            <div className="popup_form_btncontainer mb-20">
                                <button type="submit" className="popup_btn w-button">Login</button>
                            </div>
                            <p className="p">Don't have an account yet? <a href="#" data-w-id="9a574461-1aa0-d6e0-0dce-37c9d07573ef" className="link-style1" onClick={this.switchLoginLogout.bind(this)}>Sign up</a>
                            </p>
                        </form>
                        <div className={`w-form-done ${this.state.isSigningIn && this.state.isSuccesful == true ? "" : "display-none"}`} tabIndex="200" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className={`w-form-fail ${this.state.isSigningIn && this.state.isSuccesful == false ? "" : "display-none"}`} tabIndex="200" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="e43dec5b-6b16-d7a2-4f0f-8bf1f16ac704" onClick={this.closeLogin.bind(this)} className="popup_close_btn"><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
                <div className={`popup_signup ${this.state.isSigningIn || this.state.showVerificationModal ? "display-none" : "display-flex"}`}>
                    <div className="w-form">
                        <form id="email-form" name="email-form" onSubmit={this.signup.bind(this)} data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="33a12853-f2c9-f14d-30bf-abaabcbf0ab4" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Sign Up</h3>
                                </div>
                            </div><input type="text" className="popup_from-textfield w-input" maxLength="256" onChange={this.onInputChange.bind(this)} name="name" value={this.state.name} data-name="Name 3" placeholder="Name" id="name-3" />
                            <input type="email" className="popup_from-textfield w-input" maxLength="256" onChange={this.onInputChange.bind(this)} name="email" value={this.state.email} data-name="Name 3" placeholder="Email" id="name-3" />
                            <input type="password" className="popup_from-textfield w-input" maxLength="256" onChange={this.onInputChange.bind(this)} name="password" value={this.state.password} data-name="Name 2" placeholder="Password" id="name-2" />
                            <div className="popup_form_btncontainer mb-20">
                                <button data-w-id="33a12853-f2c9-f14d-30bf-abaabcbf0abe" type="submit" className="popup_btn w-button">Sign up</button>
                            </div>
                            <p className="p">Already have an account? <a href="#" data-w-id="33a12853-f2c9-f14d-30bf-abaabcbf0ac2" className="link-style1" onClick={this.switchLoginLogout.bind(this)}>Log in</a>
                            </p>
                        </form>
                        {/* <div className={`w-form-done ${!this.state.isSigningIn && this.state.isSuccesful == true ? "" : "display-none"}`} tabIndex="200" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div> */}
                        <div className={`w-form-fail ${!this.state.isSigningIn && this.state.isSuccesful == false ? "" : "display-none"}`} tabIndex="200" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="33a12853-f2c9-f14d-30bf-abaabcbf0aca" onClick={this.closeLogin.bind(this)} className="popup_close_btn"><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
                <div className={`popup_verifysignup ${this.state.showVerificationModal && this.state.isSuccesful ? "display-flex" : "display-none"}`}>
                    <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="e43dec5b-6b16-d7a2-4f0f-8bf1f16ac708" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Verify your Account</h3>
                                    <p className="p-2">Please type the verification code sent to your email</p>
                                </div>
                                <div className="popup_verificationfield_container">
                                    <div className="popup_verificationfield_col">
                                        <input type="text" className="popup_from-verificationfield w-input" maxLength="1" name="name-4" data-name="Name 4" placeholder="" id="name-4" value={this.state.verificationCode[0] || ''} onChange={(e) => this.handleVerificationCodeChange(e, 0)} />
                                    </div>
                                    <div className="popup_verificationfield_col">
                                        <input type="text" className="popup_from-verificationfield w-input" maxLength="1" name="name-4" data-name="Name 4" placeholder="" id="name-4" value={this.state.verificationCode[1] || ''} onChange={(e) => this.handleVerificationCodeChange(e, 1)} />
                                    </div>
                                    <div className="popup_verificationfield_col">
                                        <input type="text" className="popup_from-verificationfield w-input" maxLength="1" name="name-4" data-name="Name 4" placeholder="" id="name-4" value={this.state.verificationCode[2] || ''} onChange={(e) => this.handleVerificationCodeChange(e, 2)} />
                                    </div>
                                    <div className="popup_verificationfield_col">
                                        <input type="text" className="popup_from-verificationfield w-input" maxLength="1" name="name-4" data-name="Name 4" placeholder="" id="name-4" value={this.state.verificationCode[3] || ''} onChange={(e) => this.handleVerificationCodeChange(e, 3)} />
                                    </div>
                                </div>
                            </div>
                            <div className="popup_form_btncontainer justify-spacebetween">
                                {/* <a data-w-id="e43dec5b-6b16-d7a2-4f0f-8bf1f16ac719" href="#" className="popup_link">Back</a> */}
                                <a href="#" className="popup_btn w-button" onClick={this.verifyCode.bind(this)}>Confirm</a>
                            </div>
                        </form>
                        <div className="w-form-done display-none" tabIndex="-1" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className={`w-form-fail ${this.state.isVerificationSuccessful ? "display-none" : ""}`} tabIndex="-1" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="e43dec5b-6b16-d7a2-4f0f-8bf1f16ac723" className="popup_close_btn" onClick={this.closeLogin.bind(this)}>
                        <img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegistration