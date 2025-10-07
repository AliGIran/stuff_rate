import {When, Then, Given, Before} from "@badeball/cypress-cucumber-preprocessor";
import commonFunctions from "../../e2e/common/common-functions";
import dutyAllocations from "../../e2e/pages/duty_allocation_page";

Before({tags: '@manager-login'}, () => {
    cy.fixture('users').then((users) => {
        const manager = users.manager;
        const userDataTable = [
            {type: 'NationalID', value: manager.NationalID},
            {type: 'save', value: manager.save.toString()},
        ];
        commonFunctions.firstVisit();
        commonFunctions.loginUser(userDataTable);
    });
})

Before({tags: '@employee-login'}, () => {
    cy.fixture('users').then((users) => {
        const employee = users.employee;
        const userDataTable = [
            {type: 'NationalID', value: employee.NationalID},
            {type: 'save', value: employee.save.toString()},
        ];
        commonFunctions.firstVisit();
        commonFunctions.loginUser(userDataTable);
    });
})

Then ('wait {int}',(millisecond)=>cy.wait(millisecond));

When("goto {string}", (url) => {
    return commonFunctions.visit(url);
});

Given("I open web site", () => {
    return commonFunctions.firstVisit();
});

When('Login by employee username', () => {
    const fname = cy.get('#FName');
    fname.clear();
    fname.click().type('sample');
    cy.get('button[type="submit"]', {timeout: 5000}).click();
})

Then('loginUserByIndex {int} with data', (userIndex, dataTable) => {
    const users = Cypress.env('users');
    const user = users[userIndex];

    const inputs = dataTable.hashes().map(row => {
        const value = row.value === 'economicNo' ? user.economicNo : row.value;
        return {
            type: row.type,
            value: value
        };
    });
    console.log('✅ commonFunction loaded:', commonFunction);

    return commonFunctions.loginUserWithDynamicData(inputs);
})

Then('loginUser', dataTable => {
    let result = [];
    result = commonFunctions.changeDataTable(dataTable);
    return commonFunctions.loginUser(result);
});

When('draft', () => {
    cy.get('button');
})

When('user choose {string} from level 1 classification', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.level1ClassificationElement(), myText)
    // dutyAllocations.selectFromDropDownList(myText);
})

When('user choose {string} from level 2 classification', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.level2ClassificationElement(), myText)
})

When('user choose {string} from level 3 classification', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.level3ClassificationElement(), myText)
})

When('user choose {string} from level 4 classification', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.level4ClassificationElement(), myText)
})

When('user choose {string} from category', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.titleElement(), myText)
})

When('user type {string} in description', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.titleDescriptionInput(),myText);
})

When('user type {string} in duty ID', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.dutyIdInput(),myText);
})

When('user type {string} in duty ID description', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.dutyIDDescriptionInput(),myText);
})

When('user click advanced filter button', (myText) => {
    return dutyAllocations.clickAdvancedButton();
})

When('user choose {string} from status', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.statusElement(),myText);
})

When('user choose {string} from ID type', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.idTypeElement(),myText);
})

When('user choose {string} from duty type', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.dutyTypeElement(),myText);
})

When('user choose {string} from approval level', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.approvalLevelElement(),myText);
})

When('user type {string} in tax rate', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.taxRateInput(),myText);
})

When('user choose {string} from legal clause', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.legalClauseElement(),myText);
})

When('user choose {string} from supervisor approval', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.supervisorApprovalElement(),myText);
})

When('user choose {string} from employee approval', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.employeeApprovalElement(),myText);
})

When('user choose {string} from tags', (myText) => {
    return commonFunctions.typeInInput(dutyAllocations.tagsElement(),myText);
})

When('user click licenced checkbox', (myText) => {

    return dutyAllocations.clickLicencedCheckbox()
})

When('user choose {string} from مشمولیت', (myText) => {
    return commonFunctions.selectFromDropdown(dutyAllocations.mashmuliatElement(),myText);
})



