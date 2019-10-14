#!/bin/bash

if [ $# -ne 2 ];
then
    echo -e "Necessário informar o ambiente: ( nome do arquivo .env dentro de config) e o nome da feature a ser executada (arquivo .feature dentro de features)"
    exit 3
fi

AMBIENTE=$1.env ./node_modules/.bin/cucumber-js features/$2.feature -f json:test/report/cucumber_report.json

node ./test/report/report.js
