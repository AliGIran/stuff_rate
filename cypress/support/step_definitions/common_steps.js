import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import commonFunctions from "../../e2e/common/common-functions";

When("goto {string}", (url) => {
    commonFunctions.visit(url);
});

Given("I open web site", () => {
    commonFunctions.firstVisit();
});

When('Login by employee username', () => {
    cy.get('#FName').clear().click().type('sample');
    cy.get('button[type="submit"]',{timeout:5000}).click();
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

    return commonFunctions.loginUserwithdynamicdata(inputs);
})

//common-function.js
//1.loginUser 2.select 3.changeDataTable 4.visit 5.firstVisit 6.contains 7.clickButton 8.parentCheckbox
Then('loginUser', dataTable => {
    let result = [];
    result = commonFunctions.changeDataTable(dataTable);
    commonFunctions.loginUser(result);
});

When('draft',()=>{
    cy
})