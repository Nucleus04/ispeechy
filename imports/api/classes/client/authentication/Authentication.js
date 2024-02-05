import Client from "../Client";
import Watcher from "../Watcher";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { AUTHENTICATION } from "../../../common";

class Authentication extends Watcher {
    constructor(parent) {
        super(parent);
    }

    login(email, pasword) {
        return new Promise((resolve, reject) => {
            this.Parent.login(email, pasword, (err) => {
                if (err) {
                    alert(err.message);
                    resolve(false);
                } else {
                    resolve(true);
                }
            })
        })
    }


    signup(name, email, password) {
        return new Promise((resolve, reject) => {

            Accounts.createUser({ email: email, password: password, profile: { name: name } }, (err) => {
                if (err) {
                    // alert(err.reason)
                    resolve(false);
                } else {
                    resolve(true);
                }
            })
        })
    }

    verify(code) {

        return new Promise((resolve, reject) => {
            this.Parent.callFunc(AUTHENTICATION.VERIFY, { code: code, userid: Meteor.userId() }).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error)
            })
        })
    }
}


export default new Authentication(Client);