
# 1. Execução

- npm install para instalar as dependencias
- Se o sistema operacional for windows executar npm run wstart stg BuscarUsuario
- Se o sistema operacional for linux ou Mac executar npm run start stg BuscarUsuario



# 2. Exemplo


| GIVEN:                              (In English)               | Dado:                                                                            (Em Português) |
|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| I set (.*) header to (.*)                                      | que eu defino a chave (.*) no headers com o valor (.*)                                          |
| I set cookie to (.*)                                           | que eu coloque cookie para (.*)                                                                 |
| I set headers to (data table with headers\name\value)          | que eu coloque headers para(dados com tabela para headers\nome\valor)                           |
| I set body to (.*)                                             | que eu coloque no body (.*)                                                                     |
| I pipe contents of file (.*) to body                           | que eu passo o conteudo do arquivo (.*) para o body                                             |
| I pipe contents of file (.*) as (.*) in global scope           | que eu passo o conteudo do arquivo (.*) como (.*) na variavel global                            |
| I have basic authentication credentials (.*) and (.*)          | que eu tenha credencias basicas de autenticação (.*) e (.*)                                     |
| I set query parameters to (data table with headers\name\value) | que eu defini o parametro de consulta para (dados com tabela para headers\nome\valor)           |
| I set form parameters to (data table with headers\name\value)  | que eu defini no parametro de formulario para (dados com tabela para headers\nome\valor)        |
| I store the raw value (.*) as (.*) in global scope             | que eu armazeno o valor bruto (.*) como (.*) na variavel global                                 |
| I'll wait (.*) seconds                                         | que eu espere (.*) segundos                                                                     |
|                                                                |                                                                                                 |

<p>
<p>


| WHEN:  (In English)             | Quando:  (Em Português)        |
|---------------------------------|--------------------------------|
| I GET $resource                 | fazer um GET $resource         |
| I POST to $resource             | fazer um POST $resource        |
| I PUT $resource                 | fazer um PUT $resource         |
| I DELETE $resource              | fazer um DELETE $resource      |
| I PATCH $resource               | fazer um PATCH $resource       |
| I request OPTIONS for $resource | solicitar um OPTIONS $resource |
| I set bearer token              | definir um bearer token        |
|                                 |                                |

<p>
<p>

| THEN:             (In English)                                    | Então: (Em Português)                                                       |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------|
| response code should be (\d+)                                     | o codigo de resposta deve ser (\d+)                                         |
| response code should not be (\d+)                                 | o codigo de resposta não deve ser (\d+)                                     |
| response header (.*) should exist                                 | o hearder da resposta (.*) deve existir                                     |
| response header (.*) should not exist                             | o hearder da resposta (.*) não deve existir                                 |
| response header (.*) should be (.*)                               | o hearder da resposta (.*) deve ser                                         |
| response header (.*) should not be (.*)                           | o hearder da resposta (.*) não deve ser (.*)                                |
| response body should be valid (xml\ json)                         | o body da resposta deve ser um (xml\json)                                   |
| response body should contain (.*)                                 | o body da resposta deve conter (.*)                                         |
| response body should not contain (.*)                             | o body da resposta não deve conter (.*)                                     |
| response body path (.*) should be (.*)                            | no caminho do body da resposta (.*) deve ser (.*)                           |
| response body path (.*) should not be (.*)                        | no caminho do body da resposta (.*) não deve ser (.*)                       |
| response body path (.*) should be of type array                   | no caminho do body da resposta (.*) deve ser um array                       |
| response body path (.*) should be of type array with length (\d+) | no caminho do body da resposta (.*) deve ser um array com o tamanho de (.*) |
| I store the value of response header (.*) as (.*) in global scope | eu armazeno o valor do header da resposta (.*) como (.*) na variavel global |
| I store the value of body path (.*) as (.*) in global scope       | eu armazeno o valor do body (.*) como (.*) na variavel global               |
```
