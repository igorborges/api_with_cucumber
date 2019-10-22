Feature: Marketplace

  @marketplace
#  @debug
  Scenario: log in with foodloverautomation2
    Given I set headers to
      | name   | value                             |
      | Content-Type | application/json;charset=utf-8                                                                                        |
    Given I set body to {"tenant_id":"IFO","type":"EMAIL","email":"foodloverautomation@gmail.com"}
    When I POST to /v1/identity-providers/OTP/authorization-codes
#    Then response code should be 201
    And response body should be valid json
    And I print response