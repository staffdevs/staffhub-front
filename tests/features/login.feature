Feature: As a user, I want to be able to login into the application so that I can navigate through it.

  Scenario: log in
    Given I am on log in screen
    And I am not authenticated

    When I enter my user and password
    And click on log in button

    Then I see the main view

  Scenario: sing up
    Given I am on log in screen
    And I do not own an account

    When I enter an emailaddress and a password
    And click on continue button
    
    Then I see the main view
