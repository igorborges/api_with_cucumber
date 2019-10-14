const { Request, Storage } = require('e2e-api-cucumber');

const { defineSupportCode } = require('cucumber');
const env = require('dotenv').config({ path: `./config/env/${process.env.AMBIENTE}` });

if (env.error) throw env.error;

defineSupportCode(({ Before }) => {
    Storage.setGlobalVariable('ambiente', process.env.FIXTURES_PATH);


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

})
