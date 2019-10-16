/* eslint-disable no-undef */
const {
    Storage, Utils, Request,
} = require('e2e-api-cucumber');
const {defineSupportCode} = require('cucumber');


defineSupportCode(({Given, Then, When}) => {

    Then(/^I print response (.*): (.*) in console output$/, (nome, object, callback) => {
            const value = Utils.evaluatePath(object, Request.getResponseObject().body);
            console.log(`${nome}: `, value);
            callback();
        });
    
    Then(/^find email$/, (callback) => {
        get();
        callback();
    });
});

async function get(){
    const path = require("path");
    const gmail = require("gmail-tester");
    const email = await gmail.check_inbox(
    path.resolve(__dirname, "credentials.json"), // Assuming credentials.json is in the current directory.
    path.resolve(__dirname, "token.json"), // Look for gmail_token.json in the current directory (if it doesn't exists, it will be created by the script).
    "é o seu código de acesso", // We are looking for 'Activate Your Account' in the subject of the message.
    "naoresponder@login.ifood.com.br", // We are looking for a sender header which has 'no-reply@domain.com' in it.
    "foodloverautomation@gmail.com", // Which inbox to poll. credentials.json should contain the credentials to it.
    10, // Poll interval (in seconds).
    30 // Maximum poll time (in seconds), after which we'll giveup.
    );
    if (email) {
    console.log("Email was found!");
    console.log(email.subject.replace(" é o seu código de acesso",""));
    } else {
    console.log("Email was not found!");
    }
}