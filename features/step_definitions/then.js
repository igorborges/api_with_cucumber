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

    Then(/^I print response$/, (callback) => {
            console.log(Request)
            callback();
    });

    When(/^I POST$/, (callback) => {
                var unirest = require("unirest");

                var req = unirest("POST", "https://marketplace.ifood.com.br/v1/identity-providers/OTP/authorization-codes");

                req.headers({
                  "cache-control": "no-cache",
                  "Postman-Token": "0175a800-bb6a-4600-a744-4fc6b2bfa08d,5e57bf9c-a0f0-4562-9956-3c833f5a3025",
                  "X-Ifood-Device-Id": "cfaf1f9c-0254-40af-92a8-9c0a2070d127",
                  "gps-latitude": "",
                  "browser": "Mac OS",
                  "gps-longitude": "",
                  "X-Ifood-Session-Id": "8188de74-c602-45c8-90d3-c720191f1dec",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Content-Length": "74",
                  "Referer": "https://www.ifood.com.br/entrar-com-email",
                  "Cache-Control": "no-cache, no-store",
                  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.2 Safari/605.1.15",
                  "Origin": "https://www.ifood.com.br",
                  "Accept-Language": "pt-BR,pt;q=1",
                  "Host": "marketplace.ifood.com.br",
                  "Accept": "application/json, text/plain, */*",
                  "Connection": "keep-alive",
                  "Content-Type": "application/json;charset=utf-8"
                });

                  req.send("{\"tenant_id\":\"IFO\",\"type\":\"EMAIL\",\"email\":\"foodloverautomation@gmail.com\"}");

                req.end(function (res) {
                  if (res.error) throw new Error(res.error);

                  console.log(res.body);
                });


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