Feature: As an employee, I want to be able to request and track necessary employment certificates.

    Scenario: Requesting an Employment Certificate
        Given that I am an employee
        And I need an employment certificate of any type

        When I request the employment certificate

        Then the process of requesting the certificate is initiated
        And I receive confirmation that my request has been received

    Scenario: Tracking an Employment Certificate
        Given that I am an employee
        And I have requested an employment certificate of any type

        When I track the employment certificate
        
        Then I can see the current status of the certificate
        And I receive updates on the progress of the certificate request