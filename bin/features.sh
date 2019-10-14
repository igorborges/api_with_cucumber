#!/bin/bash
if [ $# -ne 2 ];
then
    echo -e "Necessário informar o ambiente: ( nome do arquivo .env dentro de config) e a feature a ser executada"
    exit 3
fi
CMD=$(AMBIENTE=$1.env FEATURE=$2 node ./features.js)
eval $CMD
node ./test/report/report.js
