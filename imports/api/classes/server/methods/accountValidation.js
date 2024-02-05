import { Meteor } from "meteor/meteor";
function AccountValidation(email) {
    console.log("Account validation email", email);
    const user = Meteor.users.findOne({ 'emails.address': email });
    console.log("Users document", user);

    if (user) {
        console.log(user.emails[0].verified);
        if (user.emails[0].verified) {
            return {
                isVerified: true,
                message: "Email has been verified"
            };
        } else {
            return {
                isVerified: false,
                message: "Email has not been verified"
            };
        }
    } else {
        return {
            isVerified: false,
            message: "Account does not exist."
        };
    }


}



export default AccountValidation;