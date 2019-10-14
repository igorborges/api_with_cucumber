Feature: Perform GET and verify code 200

    @swapi
    Scenario: Get fake user
        When I GET /people/1/
        Then response code should be 200
