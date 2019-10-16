Feature: Perform GET and verify code 200

    @swapi
    @debug
    Scenario: Get fake user
        When I GET /people/1/
        Then response code should be 200
        # And I store the value of body path $.name as name in global scope
        # Then I print response name: $.name in console output
        And find email
        And I'll wait 5 seconds

    # @placeholder
    #     Scenario: post
    #     Given I pipe contents of file ./data/example.json to body
    #     When I POST to /todos/1
    #     Then response code should be 200
