import React, { Component } from "react";
import States from "../../../../api/classes/client/states/States";

const NAME = "HERO"
class PopupVideo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        States.setWatcher(this, NAME);
        this.popupRef = React.createRef();
    }

    handleClickOutside = (event) => {
        if (this.popupRef && !this.popupRef.current.contains(event.target) && !event.target.classList.contains('card-video')) {
            States.setShowVideo();
            console.log("Clicking outside")
        } else {
            console.log("Clicking inside")
        }
    }


    render() {
        States.initiateWatch(NAME);
        return (
            <div className={`popup-video ${States.showVideo ? "" : "display-none"}`} onClick={this.handleClickOutside.bind(this)}>
                <div className="popupwrapper">
                    <div className="card-video" ref={this.popupRef}>
                        <div data-w-id="ea75d22d-72a8-5a2f-2279-1ca3fc639513" className="btn-close"><img src="/Asset-1_2Asset-1.png" loading="lazy" alt="" />
                        </div>
                        <div style={{ paddingTop: "56.17021276595745%" }} className="w-embed-youtubevideo">
                            <iframe src="https://www.youtube.com/embed/eqBDcrAP-Ig?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", pointerEvents: "auto" }} allow="autoplay; encrypted-media" allowFullScreen="" title="iSpeechy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupVideo;