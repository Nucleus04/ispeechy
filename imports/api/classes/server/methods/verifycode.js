import { Meteor } from "meteor/meteor";

function verifyCode({ code, userid }) {

    if (code.length != 4) {
        return false;
    } else {
        const user = Meteor.users.findOne(this.userId);
        const token = user.services.email.verificationTokens[0].token.substr(0, 4).toUpperCase();
        const convertedCode = code.toUpperCase();

        if (token === convertedCode) {
            Meteor.users.update(
                { _id: this.userId },
                {
                    $set: {
                        'services.email.verificationTokens': [],
                        'emails.0.verified': true
                    }
                }
            )
            return true;
        } else {
            return false;
        }
    }
}


export default verifyCode;