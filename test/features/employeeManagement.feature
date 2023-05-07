Feature: As a human resources manager, I want to manage employee information to keep it up-to-date.

    Scenario: Updating employee information
        Given that I am logged in as a human resources manager

        When I select the employee

        Then I can view and update the employee's personal and contact information
        * I can add, update, and delete the employee's contracts
        * I can record changes in the employee's position and promotions

    Scenario: Updating personal and contact information
        Given that I am an employee
        And I need to update my personal information

        When I update my personal and contact information
        
        Then my personal and contact information is updated in the company's system
        And I receive confirmation that my information has been updated successfully

    Scenario: Updating information such as interests and preferences
        Given that I am an employee
        And I need to update my contact information, interests, and preferences
        
        When I update my contact information, interests, and preferences

        Then my interests and preferences information is updated in the company's system
        And I receive confirmation that my information has been updated successfully