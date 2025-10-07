Feature:  Stuff rate - Duty allocation

  @smoke
  @invoice
  @domesticSale
  @manager-login
  Scenario: SR-04-01 Assert that elements are available and functional

    When goto 'url.خدمات.بدون نرخ'
    And user choose 'خدمات مالی و بی' from level 1 classification
    Then wait 3000
    And user choose 'sample' from level 2 classification
#    And user choose 'sample' from level 3 classification
#    And user choose 'sample' from level 4 classification
#    And user choose 'sample' from category
#    And user type 'sample' in description
#    And user type 'sample' in duty ID
#    And user type 'sample' in duty ID description
#
    And user click advanced filter button
#    And user choose 'sample' from status
#    And user choose 'sample' from ID type
#    And user choose 'sample' from duty type
#    And user choose 'sample' from approval level
#    And user type 'sample' in tax rate
#    And user choose 'sample' from legal clause
#    And user choose 'sample' from supervisor approval
#    And user choose 'sample' from employee approval
#    And user choose 'sample' from tags

    And user click licenced checkbox
    And user choose 'sample' from مشمولیت

