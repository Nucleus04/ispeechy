import { Meteor } from "meteor/meteor";
import { AUTHENTICATION } from "../../api/common";
import "./verificationCode/verificationCode";
import verifyCode from "../../api/classes/server/methods/verifycode";
import AccountValidation from "../../api/classes/server/methods/accountValidation";
export default Meteor.startup(async () => {
    console.log("iSpeechy successfully started");

    process.env.MAIL_URL = "smtp://stormthunder815@gmail.com:ssfhyxjokedlixko@smtp.gmail.com:587";

    Meteor.methods({
        [AUTHENTICATION.VERIFY]: verifyCode,
        [AUTHENTICATION.ACCOUNTVALIDATOR]: AccountValidation,
    })
})