Feature: As a user, I want to be able to see the profile view so that I can see my account information.

  Scenario: View pro

    Given I am on the main screen
    And I am authenticated

    When I click on the <button> button on the sidebar

    Then I see the main menu of <view>

    Examples:
    | button            | view              |
    | Info              | Info              |
    | Request           | Request           |
    | RequestStatus     | RequestStatus     |