import Watcher from "../Watcher";
import Client from "../Client";



class State extends Watcher {
    #showLogin = false;
    #showVideo = false;
    constructor(parent) {
        super(parent);
    }

    get showLogin() {
        return this.#showLogin;
    }

    get showVideo() {
        return this.#showVideo;
    }

    setShowLogin() {
        this.#showLogin = !this.#showLogin;
        this.activateWatcher();
        return;
    }

    setShowVideo() {
        console.log("Change show video");
        this.#showVideo = !this.#showVideo;
        this.activateWatcher();
        return;
    }

}

export default new State(Client);