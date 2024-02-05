import React, { Component } from "react";


class GotCode extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="popup_gotcode" style={{ display: "none" }}>
                <div className="popup_inputcode">
                    <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="45a3734b-e52d-d977-7218-3c0ad99dd891" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Already got code?</h3>
                                    <p className="p">Input your details below:</p>
                                </div>
                            </div><input type="text" className="popup_from-textfield w-input" maxLength="256" name="name-3" data-name="Name 3" placeholder="Product Code" id="name-3" />
                            <input type="text" className="popup_from-textfield w-input" maxLength="256" name="name-3" data-name="Name 3" placeholder="Name" id="name-3" />
                            <input type="text" className="popup_from-textfield w-input" maxLength="256" name="name-2" data-name="Name 2" placeholder="Email" id="name-2" />
                            <div className="popup_form_btncontainer">
                                <a data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd89c" href="#" className="popup_btn w-button">Next</a>
                            </div>
                        </form>
                        <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8a4" className="popup_close_btn
                                                            "><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
                <div className="popup_verify">
                    <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="45a3734b-e52d-d977-7218-3c0ad99dd8a8" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Verify your Account</h3>
                                    <p className="p-2">Please type the verification code sent to your email</p>
                                </div>
                                <div className="popup_verificationfield_container">
                                    <div className="popup_verificationfield_col"><input type="text" className="popup_from-verificationfield w-input" maxLength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4" /></div>
                                    <div className="popup_verificationfield_col"><input type="text" className="popup_from-verificationfield w-input" maxLength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4" /></div>
                                    <div className="popup_verificationfield_col"><input type="text" className="popup_from-verificationfield w-input" maxLength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4" /></div>
                                    <div className="popup_verificationfield_col"><input type="text" className="popup_from-verificationfield w-input" maxLength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4" /></div>
                                </div>
                            </div>
                            <div className="popup_form_btncontainer justify-spacebetween">
                                <a data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8b9" href="#" className="popup_link">Back</a>
                                <a data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8bb" href="#" className="popup_btn w-button">Next</a>
                            </div>
                        </form>
                        <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8c3" className="popup_close_btn
                                                            "><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                    <div data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8c5" className="incorrectcode">
                        <div>Incorrect Code</div>
                    </div>
                </div>
                <div className="popup_incorrectcode">
                    <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="45a3734b-e52d-d977-7218-3c0ad99dd8ca" aria-label="Email Form">
                            <div className="popup_form-div">
                                <div className="popup_form-icon"
                                ><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543cafe2e11dee45c31d9dc_icon_x.svg" loading="lazy" alt="" />
                                </div>
                                <div className="popupheader-div">
                                    <h3 className="popupheader">Oops!</h3>
                                    <p className="p-2">The code you entered is incorrect.</p>
                                </div>
                            </div>
                            <div className="popup_form_btncontainer justify-spacebetween">
                                <a data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8d4" href="#" className="popup_link">Back</a>
                                <a href="#" className="popup_btn w-button">Try Again</a>
                            </div>
                        </form>
                        <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8de" className="popup_close_btn
                                                            "><img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
                <div className="popup_success">
                    <div className="popup_successformblock_container">
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="6576e72a9598c75de9f9bce7" data-wf-element-id="45a3734b-e52d-d977-7218-3c0ad99dd8e3" aria-label="Email Form">
                                <div className="popup_successform">
                                    <div className="popup_form-icon"><img
                                        src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543cafe754395bb34faa8a4_icon_correct.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="popupheader-div center">
                                        <h3 className="popupheader">Success!</h3>
                                        <p className="p-2">Thanks for signing up. We hope you enjoy it! Here’s your file:</p>
                                    </div>
                                    <div className="popup_downloadfilecontainer">
                                        <div className="popup_downloadfile_icon"><
                                            img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543ccf3bfd904858f7e6cda_icon_apk.svg" loading="lazy" alt="" />
                                        </div>
                                        <div className="popup_downloadfile_textdiv">
                                            <p className="p">hometoaudio.apk</p>
                                            <p className="p text-graysmall">2.8MB</p>
                                        </div>
                                    </div>
                                    <p className="p-2">Expires after: 23h40m</p>
                                    <div className="popup_form_btncontainer mt-20">
                                        <a href="#" className="popup_btn w-button">Download</a>
                                    </div>
                                </div>
                            </form>
                            <div className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="45a3734b-e52d-d977-7218-3c0ad99dd8ff" className="popup_close_btn">
                        <img src="https://uploads-ssl.webflow.com/6543c54836a31a4e01c8588b/6543c7986f7079fd1d4c9f9e_close.svg" loading="lazy" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}


export default GotCode;