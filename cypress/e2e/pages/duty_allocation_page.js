class DutyAllocationPage {

    // locators ******************************************************************************

    // عنوان صفحه خدمات بدون نرخ
    dutyAllocationPageTitle() {
        return cy.get('.style-1s6223d')
    }

    // طبقه‌بندی سطح 1
    level1ClassificationElement() {
        return cy.get('[name="ControlDropDownList_e206d308c0de_c829ab"]', {timeout: 2000})
            .should("be.visible")
    }

    // طبقه‌بندی سطح 2
    level2ClassificationElement() {
        return cy.get('[name="ControlDropDownList_e0da2c413611_12a2ce"]', {timeout: 2000})
            .should("be.visible")
    }

    // طبقه‌بندی سطح 3
    level3ClassificationElement() {
        return cy.get('[name="ControlDropDownList_908e035c6cdd_267545"]', {timeout: 2000})
            .should("be.visible")
    }

    // طبقه‌بندی سطح 4
    level4ClassificationElement() {
        return cy.get('[name="ControlDropDownList_35bff07f42bd_4b2322"]', {timeout: 2000})
            .should("be.visible")
    }

    // سرفصل
    titleElement() {
        return cy.get('[name="ControlDropDownList_6484daea8832_778dd3"]', {timeout: 2000})
            .should("be.visible")
    }

    // شرح سرفصل
    titleDescriptionInput() {
        return cy.get('[name="ControlTextBox_6ee5e6d5f473_506448"]', {timeout: 2000})
            .should("be.visible")
    }

    // شناسه خدمت
    dutyIdInput() {
        return cy.get('[name="ControlTextBox_092fea7ba3e7_e3391e"]', {timeout: 2000})
            .should("be.visible")
    }

    // شرح شناسه خدمت
    dutyIDDescriptionInput() {
        return cy.get('[name="ControlTextBox_8157da7b046b_d05ef2"]', {timeout: 2000})
            .should("be.visible")
    }

    // وضعیت
    statusElement() {
        return cy.get('[name="ControlDropDownList_4dc736495688_1b1cca"]', {timeout: 2000})
            .should("be.visible")
    }

    // نوع شناسه
    idTypeElement() {
        return cy.get('[name="ControlDropDownList_bebf23edf683_f713bf"]', {timeout: 2000})
            .should("be.visible")
    }

    // نوع کالا
    productTypeElement() {
        return cy.get('[name="ControlDropDownList_fa95dcf31153_4ec376"]', {timeout: 2000})
            .should("be.visible")
    }

    // نوع خدما
    dutyTypeElement() {
        return cy.get('[name="ControlDropDownList_fa95dcf31153_4ec376"]', {timeout: 2000})
            .should("be.visible")
    }

    // سطح تایید
    approvalLevelElement() {
        return cy.get('[name="ControlDropDownList_350ed8ee930c_122974"]', {timeout: 2000})
            .should("be.visible")
    }

    // نرخ ارزش افزوده
    taxRateInput() {
        return cy.get('[name="ControlTextBox_cc6c8343e9f3_e64cb0"]', {timeout: 2000})
            .should("be.visible")
    }

    // بند قانونی
    legalClauseElement() {
        return cy.get('[name="ControlDropDownList_2a3f8831c7f8_ac657b"]', {timeout: 2000})
            .should("be.visible")
    }

    // سرپرست تایید
    supervisorApprovalElement() {
        return cy.get('[name="ControlDropDownList_209181469bab_e5094a"]', {timeout: 2000})
            .should("be.visible")
    }

    // کاربر تخصیص دهنده
    employeeApprovalElement() {
        return cy.get('[name="ControlDropDownList_046c460c95bc_c08393"]', {timeout: 2000})
            .should("be.visible")
    }

    // تگ ها
    tagsElement() {
        return cy.get('[name="ControlDropDownList_a87b3eb8ce83_1b3e17"]', {timeout: 2000})
            .should("be.visible")
    }

    //  دارای مجوز
    licencedCheckbox() {
        return cy.get('[name="ControlCheckBox_0472c1845b0e_3aaa9d"][type="checkbox"]', {timeout: 2000})
    }

    // مشمولیت
    mashmuliatElement() {
        return cy.get('[name="ControlDropDownList_e696481d13f2_38d268"]', {timeout: 2000})
            .should("be.visible")
    }

    // تاریخ ایجاد
    creationDate() {
        return cy.get('[aria-id="ControlDatePanel_e89b585eedc7_51f520"]', {timeout: 2000})
            .should("be.visible")
    }

    // تاریخ اجرا
    implementationDate() {
        return cy.get('[aria-id="ControlDatePanel_18e11e17e52d_4fe086"]', {timeout: 2000})
            .should("be.visible")
    }

    // تاریخ اعمال تغییر
    dateOfChange() {
        return cy.get('[aria-id="ControlDatePanel_28ba075f0668_548feb"]', {timeout: 2000})
            .should("be.visible")
    }

    // حذف فیلتر
    removeFiltersButton() {
        return cy.get('button[aria-id="ControlButton_ca9a8bfabd67_6acb28"][aria-type="BUTTON"]', {timeout: 2000})
            .should("be.visible")
    }

    // جستجو
    searchButton() {
        // return cy.get('button[aria-id="ControlButton_7aec8e5659c5_4e227e"][aria-type="BUTTON"]', {timeout: 2000})
        return cy.get('.style-1hnc5um > .MuiButton-contained')
            .should("be.visible")
    }

    // پیشرفته
    advancedButton() {
        return cy.get('[aria-id="ControlIcon_9c7dcf0e1a62_d851e3"]', {timeout: 2000})
            .should("be.visible")
    }

    // ویرایش
    editButton() {
        return cy.get('button[aria-id="ControlButton_6e444c4d33c3_d6eb06"][aria-type="BUTTON"]', {timeout: 2000})
            .should("be.visible")
    }

    // تخصیص نرخ ارزش افزوده
    allocationOfValueAddedRateButton() {
        return cy.get('button[aria-id="ControlButton_3bbce5057a0d_84ad50"][aria-type="BUTTON"]', {timeout: 2000})
            .should("be.visible")
    }

    // لیست گزینه
    comboList() {
        return cy.get('[role="presentation"]', {timeout: 2000})
            .should("be.visible")
    }

    itemNumberCombobox() {
        return cy.get('.app-pagination-container', {timeout: 20000}).children()
            .should("exist")
    }

    // actions ******************************************************************************

    checkDropDownLabel(el, label) {
        el.children().find(label, {timeout: 2000})
    }

    clickElement(el) {
        el.should("be.enabled").click()
    }

    enterTitleDescription(description) {
        this.titleDescriptionInput().type(description, {delay: 50})
    }

    enterDutyId(id) {
        this.dutyIdInput().type(id, {delay: 150})
    }

    enterDutyIDDescription(description) {
        this.dutyIDDescriptionInput().type(description, {delay: 50})
    }

    clickLicencedCheckbox() {
        this.licencedCheckbox().click({force: true})
    }

    clickRemoveFiltersButton() {
        this.removeFiltersButton().click({force: true})
    }

    clickSearchButton() {
        this.searchButton().click({force: true})
    }

    clickAdvancedButton() {
        this.advancedButton().click({force: true})
    }

    clickEditButton() {
        this.editButton().click({force: true})
    }

    selectFromDropdown(chainable, myText) {
        return undefined;
    }

    verifyPageTitle(element, title) {
        return element.should("contain.text", title);
    }

    checkElementStatus(element, status) {
        const text = status.toLowerCase();
        if (text === 'disable' || text === 'enable') {
            return element.should(`be.${text}d`);
        }
        throw new Error("❌ Invalid status: must be 'disable' or 'enable'");
    }
}

// export the object
module.exports = new DutyAllocationPage();
