class DutyAllocationPage {

    // locators
    searchButton() {
        return cy.get('button[aria-id="ControlButton_7aec8e5659c5_4e227e"][aria-type="BUTTON"]',{timeout:2000}).click()
    }

    removeFiltersButton() {
        return cy.get('button[aria-id="ControlButton_ca9a8bfabd67_6acb28"][aria-type="BUTTON"]',{timeout:2000}).click()
    }




    // actions

    clickSearchButton() {
        this.searchButton().click()
    }
    clickRemoveFiltersButton() {
        this.removeFiltersButton().click()
    }





    enterUsername(username) {
        this.usernameInput().type(username);
    }

    enterPassword(password) {
        this.passwordInput().type(password);
    }

    clickLogin() {
        this.loginButton().click();
    }
}

// export the object
module.exports = new LoginPage();
