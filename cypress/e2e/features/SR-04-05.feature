@smoke
@dutyAllocation
Feature:  Stuff rate - Duty allocation

  @manager-login
  Scenario: SR-04-05-01 Verify the page title

    Given goto 'url.خدمات.بدون نرخ'
    Then The title should be 'سامانه مدیریت شناسه کالا و خدمت'


  @employee-login
  Scenario: SR-04-05-02 Verify the page title

    Given goto 'url.خدمات.بدون نرخ'
    Then The title should be 'سامانه مدیریت شناسه کالا و خدمت'