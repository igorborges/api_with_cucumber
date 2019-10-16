Feature: Marketplace

  # @marketplace
  # @debug
  # Scenario: set default provider
  #   # Given I set query parameters to
  #   #   | name             | value                         |
  #   #   | default_provider | true                          |
  #   #   | email            | foodloverautomation@gmail.com |
  #   #   | tenant_id        | IFO                           |
  #   Given I set headers to
  #     | name         | value            |
  #     | Host | marketplace.ifood.com.br |
  #     | User-Agent | PostmanRuntime/7.17.1 |
  #   When I GET /v3/identity-providers?default_provider=true&email=foodloverautomation@gmail.com&tenant_id=IFO
  #   Then response code should be 200
  #   And I print response : $[0].name in console output

  @marketplace
  @debug
  Scenario: log in with foodloverautomation
    Given I set headers to
      | name            | value                                |
      | Content-Type    | application/json;charset=utf-8       |
      | Host            | marketplace.ifood.com.br             |
      | User-Agent      | PostmanRuntime/7.17.1                |
      | Accept-Encoding | gzip, deflate                        |
      | Accept          | application/json                     |
      | Cache-Control   | no-cache                             |
      | Postman-Token   | 1b8b5297-fb84-4813-8db5-1ddd0c1fb040 |
      | Content-Length  | 74                                   |
#      | Connection      | keep-alive                           |
    # And I pipe contents of file ./data/login/authorization_codes.json to body
    Given I set body to {"tenant_id":"IFO","type":"EMAIL","email":"foodloverautomation@gmail.com"}
    When I POST to /v1/identity-providers/OTP/authorization-codes
    Then response code should be 201
    And response body should be valid json
