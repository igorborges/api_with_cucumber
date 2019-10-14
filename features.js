const yaml = require('node-yaml');

const cucumber = (key, object) => {
    let features = `AMBIENTE=${process.env.AMBIENTE} ./node_modules/.bin/cucumber-js `;
    object[key].forEach((element) => {
        features += `${element} `;
    });

    features += '-f json:test/report/cucumber_report.json';

    console.log(features);
};

yaml.read(
    'features.yml',
    { encoding: 'utf8' },
    (err, data) => {
        if (err) {
            throw err;
        }
        cucumber(process.env.FEATURE, data);
    }
);

