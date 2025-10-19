@smoke
@dutyAllocation
Feature:  Stuff rate - Duty allocation

  @manager-login
  Scenario: SR-04-04-01 Verify the number of table rows

    Given goto 'url.خدمات.بدون نرخ'
    And wait 5000

    When Choose 50 for number of rows in the table

    Then The number of table rows should be 50


  @employee-login
  Scenario: SR-04-04-01 Verify the number of table rows

    Given goto 'url.خدمات.بدون نرخ'
    And wait 5000

    When Choose 50 for number of rows in the table

    Then The number of table rows should be 50
