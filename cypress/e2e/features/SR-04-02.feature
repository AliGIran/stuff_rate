
@smoke
@dutyAllocation
Feature:  Staff rate - Duty allocation

  @manager-login
  Scenario: SR-04-02-01 Verify that the page title is correct when login by manager account

    Given goto 'url.خدمات.بدون نرخ'

    Then Verify duty allocation page title is 'خدمات بدون نرخ'



  @employee-login
  Scenario: SR-04-02-02 Verify that the page title is correct when login by employee account

    Given goto 'url.خدمات.بدون نرخ'

    Then Verify duty allocation page title is 'خدمات بدون نرخ'


