Feature: As a user, I want to be able to see the main menus of the application so that I can navigate through it.

  Scenario: View main menu

    Given I am on the main screen
    And I am authenticated

    When I click on the <button> button on the sidebar

    Then I see the main menu of <view>

    Examples:
    | button            | view              |
    | Info              | Info              |
    | Request           | Request           |
    | RequestStatus     | RequestStatus     |