const { Request, Storage } = require('e2e-api-cucumber');

const { defineSupportCode } = require('cucumber');
const env = require('dotenv').config({ path: `./config/env/${process.env.AMBIENTE}` });

if (env.error) throw env.error;

defineSupportCode(({ Before }) => {
    Storage.setGlobalVariable('ambiente', process.env.DATA);


    defineSupportCode(({ setDefaultTimeout }) => {
        setDefaultTimeout(100 * 1000); // this is in ms
    });

    Before(() => {
        Request
            .init()
    });

    Before({ tags: '@debug' }, () => {
        Request.setDebug(true);
    });


    Before({ tags: '@swapi' }, () => {
        Request
            .setDomain(process.env.HOST_TEST)
    });

    Before({ tags: '@placeholder' }, () => {
        Request
            .setDomain(process.env.JSON_PLACEHOLDER)
    });

    Before({ tags: '@marketplace' }, () => {
        Request
            .setDomain(process.env.MARKETPLACE)
            .setRequestHeader('Content-Type', 'application/json')
            .setRequestHeader('Accept', 'application/json')
//            .removeRequestHeader('User-Agent');
    });

    Before({ tags: '@cartola' }, () => {
            Request
                .setDomain(process.env.CARTOLA)
        });

})
