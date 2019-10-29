/* eslint-disable no-undef */
const {
    Storage, Utils, Request,
} = require('e2e-api-cucumber');
const {defineSupportCode} = require('cucumber');


defineSupportCode(({Given, Then, When}) => {

    Then(/^I print response (.*): (.*) in console output$/, (name, object, callback) => {
            const value = Utils.evaluatePath(object, Request.getResponseObject().body);
            console.log(`${name}: `, value);
            callback();
        });
    
    Then(/^find email with content (.*) and store the access code as (.*)$/, (content, variable, callback) => {
        var waitTill = new Date(new Date().getTime() + 5000);
        while(waitTill > new Date()){}

        content = content.replace(/'/g, '');
        get(variable, content)

        setTimeout(() => {
                    callback();
                }, (10000));
    });

    Then(/^I print response$/, (callback) => {
            console.log(Request.getResponseObject().body)
            callback();
    });

});

async function get(variableName, content){
    const path = require("path");
    const gmail = require("gmail-tester");
    const email = await gmail.check_inbox(
    path.resolve(__dirname, "credentials_new.json"), // Assuming credentials.json is in the current directory.
    path.resolve(__dirname, "token_new.json"), // Look for gmail_token.json in the current directory (if it doesn't exists, it will be created by the script).
    content, // We are looking for 'Activate Your Account' in the subject of the message.
    "naoresponder@login.ifood.com.br", // We are looking for a sender header which has 'no-reply@domain.com' in it.
    "automationifood@gmail.com", // Which inbox to poll. credentials.json should contain the credentials to it.
    10, // Poll interval (in seconds).
    30 // Maximum poll time (in seconds), after which we'll giveup.
    );
    if (email) {
//    console.log("Email was found!");
    const value = email.subject.replace(content,"")
//    console.log(value) // uncomment this line to print the otp token
    Storage.setGlobalVariable(variableName, value);
    } else {
    console.log("Email was not found!");
    }
}
