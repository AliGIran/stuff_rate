
@smoke
@dutyAllocation
Feature:  Stuff rate - Duty allocation

  @manager-login
  Scenario: SR-04-01-01 Verify that all elements are available and functional in duty allocation page when manager login

    Given goto 'url.خدمات.بدون نرخ'
    And wait 3000

    When user choose 'خدمات مالی و بی' from level 1 classification
    And user choose 'خدمات پولی' from level 2 classification
    And user choose 'انتقال وجه و تسویه' from level 3 classification
    And user choose 'تراکنش مبادله نقطه' from level 4 classification
    And user choose 'خدمات پرداخت' from category
    And user type 'توضیحات شرح سرفصل' in description
    And user type '11234567891230' in duty ID
    And user type 'شرح شناسه خدمت مد نظر' in duty ID description
    And user click advanced filter button
    And user choose 'غیرفعال' from status
    And user choose 'شناسه عمومی خدمت' from ID type
    And user choose 'عمومی' from duty type
    And user choose 'بررسی نشده' from approval level
    And user type '1' in tax rate
    And user choose 'ماده 9' from legal clause
    And user choose '2593920785' from supervisor approval
    And user choose '57490845111' from employee approval
    And user choose 'صادراتی' from tags
    And user click licenced checkbox
    And user choose 'معاف' from مشمولیت
    And user choose '1404/02/31' for creation date
    And user submit filters

    Then Check the existence of table items number
    And verify 'حذف فیلتر' button is 'enable'
    And verify 'جستجو' button is 'enable'
    And verify 'ویرایش' button is 'disable'
    And verify 'تایید' button is 'disable'
    And verify 'برگشت به کارشناس' button is 'disable'
    And verify 'تخصیص نرخ ارزش افزوده' button is 'disable'


  @employee-login
  Scenario: SR-04-01-02 Verify that all elements are available and functional in duty allocation page when employee login

    Given goto 'url.خدمات.بدون نرخ'
    And wait 3000

    When user choose 'خدمات مالی و بی' from level 1 classification
    And user choose 'خدمات پولی' from level 2 classification
    And user choose 'انتقال وجه و تسویه' from level 3 classification
    And user choose 'تراکنش مبادله نقطه' from level 4 classification
    And user choose 'خدمات پرداخت' from category
    And user type 'توضیحات شرح سرفصل' in description
    And user type '11234567891230' in duty ID
    And user type 'شرح شناسه خدمت مد نظر' in duty ID description
    And user click advanced filter button
    And user choose 'غیرفعال' from status
    And user choose 'شناسه عمومی خدمت' from ID type
    And user choose 'عمومی' from duty type
    And user choose 'بررسی نشده' from approval level
    And user type '1' in tax rate
    And user choose 'ماده 9' from legal clause
    And user choose '2593920785' from supervisor approval
    And user choose '57490845111' from employee approval
    And user choose 'صادراتی' from tags
    And user click licenced checkbox
    And user choose 'معاف' from مشمولیت
    And user choose '1404/02/31' for creation date
    And user submit filters

    Then Check the existence of table items number
    And verify 'حذف فیلتر' button is 'enable'
    And verify 'جستجو' button is 'enable'
    And verify 'ویرایش' button is 'disable'
    And verify 'تخصیص نرخ ارزش افزوده' button is 'disable'