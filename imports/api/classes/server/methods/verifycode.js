import { Meteor } from "meteor/meteor";

function verifyCode({ code, userid }) {

    const isTokenExpired = (tokenCreationTime) => {
        const currentTime = new Date();
        const oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        const differenceInMillis = currentTime - tokenCreationTime;
        return differenceInMillis >= oneDayInMillis;
    }
    if (code.length != 4) {
        return false;
    } else {
        const user = Meteor.users.findOne(this.userId);
        const token = user.services.email.verificationTokens[0].token.substr(0, 4).toUpperCase();
        const whenTokenCreated = new Date(user.services.email.verificationTokens[0].when);

        const convertedCode = code.toUpperCase();
        if (!isTokenExpired(whenTokenCreated)) {
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
        } else {
            console.log("Token Expireddd....")
            return false;
        }

    }
}


export default verifyCode;