Feature: As a user, I want to be able to see the profile view so that I can see my account information.

  Scenario: View profile information
    Given I am on the main screen
    And I am authenticated

    When I click on the profile image on the sidebar

    Then I see the profile view