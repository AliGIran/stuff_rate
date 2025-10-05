class LoginPage {
// locators ******************************************************************************
    // نام
    FNameInput = () => cy.get(`#FName`, {timeout: 5000});

    // نام خانوادگی
    LNameInput = () => cy.get(`#LName`, {timeout: 5000});


    // کد ملی
    nationalIdInput = () => cy.get(`#NationalID`, {timeout: 5000});


    // موبایل
    mobileInput = () => cy.get(`#Mobile`, {timeout: 5000});

    // کد ثبت نام
    registerNumberInput = () => cy.get(`#RegisterNumber`, {timeout: 5000});


    // نوع مودی
    taxPayerTypeCombobox = () => cy.get(`#TaxpayerType`, {timeout: 5000});

    // تاریخ تولد
    birthDateInput = () => cy.get(`#BirthDate`, {timeout: 5000});

    // دکمه ورود
    submitButton = () => cy.get(`button[type="submit"]`, {timeout: 5000});

    // دکمه ورود از طریف دولت من
    submitGovButton = () => cy.get(`button[type="button"]`, {timeout: 5000});


// actions ******************************************************************************

    clickSubmitButton = () => this.submitButton().click();
    clickGovButton = () => this.submitGovButton().click()

    fillForm = (fName, lName, nationalId, mobile, registerNumber) => {
        this.FNameInput().type(fName);
        this.LNameInput().type(lName);
        this.nationalIdInput().type(nationalId);
        this.mobileInput().type(mobile);
        this.registerNumberInput().type(registerNumber);
        return this; // chainable pattern
    };

}

// export the object
module.exports = new LoginPage();
