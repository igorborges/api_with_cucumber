Feature: Marketplace

  @marketplace
  Scenario: send email with otp token and store the value of it
    Given I set headers to
      | name         | value                          |
      | Content-Type | application/json;charset=utf-8 |
    Given I set body to {"tenant_id":"IFO","type":"EMAIL","email":"automationifood@gmail.com"}
    When I POST to /v1/identity-providers/OTP/authorization-codes
    Then response code should be 201
    And response body should be valid json
    And I store the value of body path $.key as key in global scope
    And find email with content ' é o seu código de acesso' and store the access code as auth_code


  @wsloja
  Scenario: get session_token
    Given I set headers to
      | name       | value                                |
      | Cookie     | session_token=                       |
      | secret_key | 9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8 |
      | access_key | 69f181d5-0046-4221-b7b2-deef62bd60d5 |
    When I GET /ifood-ws-v3/consumer-views/home
    Then response code should be 200
    And response body should be valid json
    And I store the value of response header session_token as session_token in global scope


  @marketplace
  Scenario: send key and otp token to get the access token
    Given I set query parameters to
      | name      | value       |
      | key       | `key`       |
      | auth_code | `auth_code` |
    When I GET /v1/identity-providers/OTP/access-tokens
    Then response code should be 200
    And response body should be valid json
    And I store the value of body path $.access_token as access_token in global scope


  @marketplace
  Scenario: get the bearer token
    Given I set headers to
      | name         | value                          |
      | Content-Type | application/json;charset=utf-8 |
    And I pipe contents of file ./data/login/authentications.json to body
    When I POST to /v2/identity-providers/OTP/authentications
    Then response code should be 201
    And response body should be valid json
    And I store the value of body path $.access_token as bearer_token in global scope


  @marketplace
  Scenario: Get all the merchants and store the id of the first one
    Given I set query parameters to
      | name      | value    |
      | channel   | IFOOD    |
      | latitude  | -9.82274 |
      | longitude | -67.9475 |
    When I GET /v2/merchants
    Then response code should be 200
    And response body should be valid json
    And I store the value of body path $.merchants[0].id as merchantId in global scope


  @marketplace
  Scenario: Get all the information about the previous Merchant
    Given I set query parameters to
      | name      | value    |
      | channel   | IFOOD    |
      | latitude  | -9.82274 |
      | longitude | -67.9475 |
    When I GET /v2/merchants/`merchantId`
    Then response code should be 200
    And response body should be valid json

    And I store the value of body path $.name as merchantName in global scope

    And response body path $.name should be Teste Berp Sistemas
    And response body path $.priceRange should be CHEAPEST
    And response body path $.deliveryFee.value should be 5
    And response body path $.deliveryTime should be 20


  @wsloja
  Scenario: Get information about the merchant's menu
    Given I set query parameters to
      | name           | value    |
      | hasBestSellers | 1        |
      | latitude       | -9.82274 |
      | longitude      | -67.9475 |
    Given I set headers to
      | name          | value           |
      | session_token | `session_token` |
    When I GET /ifood-ws-v3/restaurants/`merchantId`/menu
    Then response code should be 200
    And response body should be valid json
    And I store the value of body path $.data.menu[0].itens[0].description as itemDescription in global scope
    And I store the value of body path $.data.menu[0].itens[0].code as itemCode in global scope

    And I store the value of body path $.data.menu[0].itens[0].choices[0].name as choiceName in global scope
    And I store the value of body path $.data.menu[0].itens[0].choices[0].code as choiceCode in global scope

    And I store the value of body path $.data.menu[0].itens[0].choices[0].garnishItens[0].description as garnishItemDescription in global scope
    And I store the value of body path $.data.menu[0].itens[0].choices[0].garnishItens[0].code as garnishItemCode in global scope
    And I store the value of body path $.data.menu[0].itens[0].choices[0].garnishItens[0].unitPrice as unitPrice in global scope
    And I store the value of body path $.data.menu[0].itens[0].choices[0].garnishItens[0].garnishItemDetails as garnishItemDetails in global scope


  @wsloja
#  @debug
  Scenario: create an order checkout
    Given I set headers to
      | name          | value                             |
      | session_token | `session_token`                   |
      | authorization | Bearer `bearer_token`             |
      | content-type  | application/x-www-form-urlencoded |
    And I pipe contents of file ./data/login/order to body
    When I POST to /ifood-ws-v3/v3/order/checkout
    Then response code should be 200
    And response body should be valid json
    And response body path $.code should be 00
#    And I print response : $ in console output


