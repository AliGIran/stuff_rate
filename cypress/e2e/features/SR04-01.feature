Feature:  Stuff rate - Duty allocation

  @smoke
  @invoice
  @domesticSale
  Scenario: SR-04-01 Assert that elements are available and functional

    Given I open web site
    Then loginUser
      | type       | value      |
      | NationalID | 5579923031 |
      | save       | 1          |