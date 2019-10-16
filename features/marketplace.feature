Feature: Marketplace



  @marketplace
  @debug
  Scenario: log in with foodloverautomation
    Given I set headers to
      | name               | value                                    |
      | Content-Type       | application/json;charset=utf-8           |
      | User-Agent         | okhttp/3.14.2                            |
    Given I set body to {"tenant_id":"IFO","type":"EMAIL","email":"foodloverautomation@gmail.com"}
    When I POST to /v1/identity-providers/OTP/authorization-codes
    Then response code should be 201
    And response body should be valid json