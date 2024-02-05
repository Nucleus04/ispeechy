import Watcher from "../Watcher";
import Client from "../Client";



class State extends Watcher {
    #showLogin = false;
    #showVideo = false;
    #signupEmail = null;
    constructor(parent) {
        super(parent);
    }

    get showLogin() {
        return this.#showLogin;
    }

    get showVideo() {
        return this.#showVideo;
    }

    get signupEmail() {
        return this.#signupEmail;
    }

    setShowLogin() {
        this.#showLogin = !this.#showLogin;
        this.activateWatcher();
        return;
    }

    setShowVideo() {
        this.#showVideo = !this.#showVideo;
        this.activateWatcher();
        return;
    }

    setSignupEmail(email) {
        this.#signupEmail = email;
        this.activateWatcher();
        return;
    }

}

export default new State(Client);