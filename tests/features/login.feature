Feature: As a user, I want to be able to login into the application so that I can navigate through it.

  Scenario: log in

    Given I am on log in screen
    And I am not authenticated

    When I enter my user and password 
    And click on log in button

    Then I see the main view