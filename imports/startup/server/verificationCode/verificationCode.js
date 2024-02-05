import { Accounts } from "meteor/accounts-base";

Accounts.config({ sendVerificationEmail: true });
Accounts.emailTemplates.from = "ISpeechy Corp.";
Accounts.emailTemplates.siteName = "ISpeechy Corp."
Accounts.emailTemplates.verifyEmail = {
    subject() {
        return `iSpeechy verification code`
    },
    text(user, url) {
        const token = user.services.email.verificationTokens[0].token.substr(0, 4).toUpperCase();
        console.log("Verification code executed");
        return `This is your verification code ${token}`;
    },
}