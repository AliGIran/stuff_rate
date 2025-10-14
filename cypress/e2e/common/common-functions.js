import dutyAllocations from "../../e2e/pages/duty_allocation_page";

// commonFunction.js
// This file contains the common functions that are used in other test files
export default {
    //برای لاگین در سامانه از طریق یوزرهای ساخته شده در طی تست ازین تابع استفاده می کنیم
    // loginUserWithDynamicData(inputs) {
    //     cy.wait(1000);
    //     for (const input of inputs) {
    //         const {type, value} = input;
    //
    //         if (!value) continue;
    //
    //         switch (type) {
    //             case 'firstName':
    //                 const fName = cy.get('#FName');
    //                 fName.clear().click().type(value);
    //                 break;
    //             case 'lastName':
    //                 const lName = cy.get('#LName');
    //                 lName.clear().click().type(value);
    //                 break;
    //             case 'NationalID':
    //                 const nationalID = cy.get('#NationalID');
    //                 nationalID.clear().click().type(value);
    //                 break;
    //             case 'Mobile':
    //                 const mobile = cy.get('#Mobile');
    //                 mobile.clear().click().type(value);
    //                 break;
    //             case 'RegisterNumber':
    //                 const registerNumber = cy.get('#RegisterNumber');
    //                 registerNumber.clear().click().type(value);
    //                 break;
    //             case 'save':
    //                 cy.contains('ورود به سامانه').click();
    //                 cy.wait(1000);
    //                 break;
    //         }
    //     }
    // },
    loginUserWithDynamicData(inputs) {
        cy.wait(1000);

        const fieldSelectors = {
            firstName: '#FName',
            lastName: '#LName',
            NationalID: '#NationalID',
            Mobile: '#Mobile',
            RegisterNumber: '#RegisterNumber',
        };

        inputs.forEach(({type, value}) => {
            if (!value) return;

            if (type === 'save') {
                cy.contains('ورود به سامانه').click();
                cy.wait(1000);
                return;
            }

            const selector = fieldSelectors[type];
            if (selector) {
                const el = cy.get(selector);
                el.clear().click().type(value);
                cy.log('typed ' + value + " for " + type)
            } else {
                cy.log(`Unknown input type: ${type}`);
            }
        });
    },

    //برای لاگین از این تابع استفاده می کنیم
    //مقادیر دیتاتیبل به ترتیب در صفحه لاگین پر می شوند

    // loginUser(inputs) {
    //     cy.wait(2000);
    //     for (const input of inputs) {
    //         const type = input.type;
    //         if (input.value !== '') {
    //             if (type === 'firstName') {
    //                 const fName = cy.get('#FName');
    //                 fName.clear().click().type(input.value);
    //             }
    //             if (type === 'lastName') {
    //                 const lName = cy.get('#LName');
    //                 lName.clear().click().type(input.value);
    //             }
    //             if (type === 'NationalID') {
    //                 const nationalID = cy.get('#NationalID');
    //                 nationalID.clear().click().type(input.value);
    //             }
    //             if (type === 'Mobile') {
    //                 const mobile = cy.get('#Mobile');
    //                 mobile.clear().click().type(input.value);
    //             }
    //             if (type === 'RegisterNumber') {
    //                 const registerNumber = cy.get('#RegisterNumber');
    //                 registerNumber.clear().click().type(input.value);
    //             }
    //             if (type === 'TaxpayerType') {
    //             }
    //
    //             if (type === 'save') {
    //                 cy.contains('button[type="submit"]', 'ورود').click({force: true});
    //                 cy.wait(1000); // wait for 1 second after clicking
    //             }
    //         }
    //     }
    // },
    // loginUser(inputs) {
    //     cy.wait(2000);
    //
    //     inputs.forEach(({type, value}) => {
    //         if (value === '') return;
    //
    //         switch (type) {
    //             case 'firstName':
    //                 cy.get('#FName').clear().click().type(value);
    //                 break;
    //
    //             case 'lastName':
    //                 cy.get('#LName').clear().click().type(value);
    //                 break;
    //
    //             case 'NationalID':
    //                 cy.get('#NationalID').clear().click().type(value);
    //                 break;
    //
    //             case 'Mobile':
    //                 cy.get('#Mobile').clear().click().type(value);
    //                 break;
    //
    //             case 'RegisterNumber':
    //                 cy.get('#RegisterNumber').clear().click().type(value);
    //                 break;
    //
    //             case 'TaxpayerType':
    //                 // Add logic here if needed
    //                 break;
    //
    //             case 'save':
    //                 cy.contains('button[type="submit"]', 'ورود').click({force: true});
    //                 cy.wait(1000);
    //                 break;
    //
    //             default:
    //                 cy.log(`Unknown input type: ${type}`);
    //         }
    //     });
    // },
    loginUser(inputs) {
        cy.wait(2000);

        const fieldSelectors = {
            firstName: '#FName',
            lastName: '#LName',
            NationalID: '#NationalID',
            Mobile: '#Mobile',
            RegisterNumber: '#RegisterNumber',
            TaxpayerType: '#TaxpayerType', // Add selector if needed
        };

        inputs.forEach(({type, value}) => {
            if (!value) return;

            if (type === 'save') {
                cy.contains('button[type="submit"]', 'ورود').click({force: true});
                cy.wait(1000);
                return;
            }

            const selector = fieldSelectors[type];
            if (selector) {
                const el = cy.get(selector);
                el.clear().click().type(value);
                cy.log('typed ' + value + " for " + type);
            } else {
                cy.log(`Unknown input type: ${type}`);
            }
        });
    },

    //یک یا چند مقدار در صفحه را انتخاب و بر روی آن کلیک می کند
    select(name) {
        cy.contains(name, {timeout: 500}).click({force: true});
    },

    //این تابع دیتاتیبل را به آرایه تبدیل می کند
    // برای خواندن دیتاتیبل هر تابع
    //قبل از اجرای تابع و جایگذاری مقادیر آن از
    //این تابع استفاده می کنیم
    changeDataTable(dataTable) {
        const columns = dataTable.rawTable[0]; // get the first row of the dataTable as the columns
        const result = []; // initialize an empty array for the result

        for (let i = 1; i < dataTable.rawTable.length; i++) {
            // loop through the rest of the rows of the dataTable
            const object = {}; // initialize an empty object for each row

            for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                // loop through the columns
                const column = columns[columnIndex]; // get the column name
                object[column] = dataTable.rawTable[i][columnIndex]; // assign the value of the cell to the object with the column name as the key
            }

            result.push(object); // push the object to the result array
        }

        console.log(result); // log the result array to the console
        return result; // return the result array
    },

    changeAdvancedTable: dataTable => {
        let inputs = dataTable.rawTable;
        let table = {};
        inputs.shift();
        inputs.map(value => {
            table[value[0]] = value[1];
        });
        return table;
    },

    //این تابع url
    //صفحه ای را که میخواهیم برویم محاسبه می کند
    //و به آن صفحه می رود
    //به عنوان مثال url.فروش.داخلی
    //مقدار آن را که برابر invoice/internalSell در جیسون ur هست
    //را به url اصلی اضافه و به ان می رود
    //اگر از جنس جزئیات یا پی دی اف باشد
    //در انتها به آن باید آدی صورتحساب نیز اضافه شود
    visit(subUrl) {
        const subUrlArray = subUrl.split(".");
        cy.fixture("base-url").then((baseurl) => {
            cy.fixture(subUrlArray[0]).then((platform) => {
                const url1 = subUrlArray[1] + "";
                const url2 = subUrlArray[2] + "";
                if (url1 === "جزئیات" || url1 === "PDF") {
                    cy.get("@ID").then((ID) => {
                        const url_visit = baseurl.url + platform[url1][url2] + ID;
                        cy.wait(2000).visit(url_visit).wait(2000);
                    });
                } else {
                    const url_visit = baseurl.url + platform[url1][url2];
                    cy.wait(2000).visit(url_visit).wait(2000);
                }
            });
        });
    },

    // برای اولین لاگین با تاخیر زیاد ویزیت اولیه انجام می شود
    firstVisit() {
        cy.fixture("base-url").then((baseurl) => {
            const url_visit = baseurl.url;
            cy.wait(2000).visit(url_visit).wait(2000);
        });
    },

    //چندین مقدار که با کاما جدا می شوند رو مورد به مورد بررسی می کند که  در صفحه باشند
    contains(name) {
        var nameArray = name.split(",");
        for (const nameElement of nameArray) {
            cy.contains(String(nameElement)).should("exist");
        }
    },

    //بر روی کلید خاصی در صفحه کلیک می کند
    clickButton(name) {
        cy.get('[type="button"]').contains(name).click({force: true});
    }, //بر روی کلید خاصی در دیالوگ کلیک می کند
    dialogclickButton(name) {
        cy.get('[role="dialog"]')
            .find('[type="button"]')
            .contains(name)
            .click({force: true}); // get all button elements, find one that contains name, and click on it with force option
    }, //نام یک فیلد از جنس تارخ را میگیرد
    //و مقدار ورودی تاریخ را می گیرد
    //تاریخ با تابع split
    //به روز و ماه و سال تبدیل می شود
    //و هر یک جداگانه اعمال می شوند
    //اول سال
    //بعد ماه و بعد روز وارد می شود
    //احتمال دارد با عقب زدن صفحه ماه به قبل از سال قبل نیز رد شویم
    //اما به دلیل اینکه با انتخاب سال ماه ریست می شود
    //چاره ای به جز اینکار نداریم
    //ماه انقدر عقب می رود تا به ماه مورد نظر برسد
    // selectDate(name, date) {
    //   const months = [
    //     "فروردین",
    //     "اردیبهشت",
    //     "خرداد",
    //     "تیر",
    //     "مرداد",
    //     "شهریور",
    //     "مهر",
    //     "آبان",
    //     "آذر",
    //     "دی",
    //     "بهمن",
    //     "اسفند",
    //   ];
    //   cy.log(date.split("/")[0]); //year
    //   let month = months[Number(date.split("/")[1]) - 1];
    //   cy.contains(name).parent("div").find("input").click({ force: true });
    //   ////
    //   for (let i = 0; i < 11; i++) {
    //     this.checkMonth(month);
    //   }
    //   cy.get('[role="dialog"]')
    //     .find('[role="grid"]')
    //     .find("button")
    //     .contains("" + Number(date.split("/")[2]))
    //     .click({ force: true }); //date
    // },
    // checkMonth(month) {
    //   cy.get(".MuiPickersCalendarHeader-label")
    //     .invoke("text")
    //     .then((text) => {
    //       if (String(text.split(" ")[0]) != month) {
    //         cy.log(month);
    //         cy.get('[aria-label="Previous month"]').click({ force: true });
    //       }
    //     });
    // },

    // تابع انتخاب تاریخ بالا برای سال مشکل داشت. تغییرات اعمال شد اما تابع قبلی برای اطمینان پاک نشد و تنها کامنت شد
    selectDate(labelText, date) {
        const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",];

        const [year, monthNum, day] = date.split("/");
        const expectedMonth = months[Number(monthNum) - 1];
        const expectedYear = year;

        // cy.contains(labelText)
        //     .parent("div")
        //     .find("input")
        //     .click({force: true});

        labelText.click({force: true});

        const ensureMonthYear = () => {
            cy.get(".MuiPickersCalendarHeader-label")
                .invoke("text")
                .then((text) => {
                    const [currentMonth, currentYear] = text.split(" ");
                    if (currentMonth !== expectedMonth || currentYear !== expectedYear) {
                        cy.get('[aria-label="Previous month"]').click({force: true});

                        ensureMonthYear();

                    }
                });
        };

        ensureMonthYear();

        cy.get('[role="dialog"]')
            .find('[role="grid"]')
            .find("button")
            .contains(String(Number(day)))
            .click({force: true});
    },

    //برای گذر کردن از پاپ آپ های مختلف سامانه طراحی شده و درواقع در مرحله اول داخل صفحه بر روی متغیر اولی که به آن اختصاص دادی کلیک میکند
    // و پس از آن برای پیدا کردن یک پاپ آپ جستجو میکند و اگر پاپ آپ ظاهر شود بر روی دکمه ای که تحت عنوان متغییر دوم به آن اختصاص داده اید کلیک میکند
    // و اگر پاپ آپی وجود نداشته باشد هم بدون انجام کار خاصی و بروز خطا از این بخش گذر می کند.
    SelectAndFindPopup(name, button) {
        cy.contains(name).click({force: true});
        cy.wait(3000);
        cy.get('body', {timeout: 5000}).then(($element) => {
            if (Cypress.$('#notices-drawer').is(':hidden')) {
                cy.log("`PopUp not found on the page, skipping selection.`");
            } else if (Cypress.$('#notices-drawer').is(':visible')) {
                cy.contains(button).click()
            } else {
                cy.log("`PopUp not found on the page, skipping selection.`");
            }
        });
    }, //برای بررسی عدم وجود یک کلمه خاص داخل صفحه طراحی شده و در واقع متغییری که به عنوان ورودی وارد کرده اید را داخل صفحه جستجو می کند
    // در صورت عدم وجود با موفقیت به مرحل هبعد می رود و در صورت وجود متغییر داخل صفحه با خطا مواجه می شود.
    NotContains(name) {
        cy.get('body').should('not.contain', name);
    },

    // کلیک برای باز شدن لیست دان و تایپ گزینه مورد نظر
    selectFromDropdown(element, optionText) {
        element.click({force: true});
        element.children()
            .find('input')
            .type(optionText, {delay: 100});
        dutyAllocations.comboList()
            .children()
            .contains(optionText,{timeout: 5000})
            .click({force: true});
    },

    // برای تایپ یک مقدار در تکستباکس
    typeValueByLabel(label, value) {
        const finalValue = (typeof value === 'string' && value.startsWith('$')) ? Cypress.env(value.slice(1)) : value;

        cy.contains('label', label)
            .then(($label) => {
                const id = $label.attr('for');
                if (id) {
                    const el = cy.get(`[id="${id}"]`);
                    el.clear().type(finalValue);
                } else {
                    const el = cy.wrap($label);
                    el.parent().find('input').clear().type(finalValue);
                }
            });
    },


    // برای تایپ مقدار taxid در تکسباکس
    typeTaxID(tax) {
        cy.get('input[name=invoiceTaxId]').clear();
        cy.get('input[name=invoiceTaxId]').type(tax)
    },


    clickFirstTaxID(tax) {
        cy.get('table tbody tr')
            .first()
            .find('td') // یا اگر شماره مالیاتی همیشه در ستون خاصی است، مثلا .eq(2)
            .contains(tax)
            .click();
    },

    checkURLToContain(myText) {
        cy.url().then((url) => {
            expect(url.toLowerCase()).to.include(myText.toLowerCase());
        });
    }, checkURLNotToContain(myText) {
        cy.url().then((url) => {
            expect(url.toLowerCase()).not.to.include(myText.toLowerCase());
        });
    },

    interceptURL(subUrl, method) {
        const [fixtureName, url1, url2] = subUrl.split(".");

        return cy.fixture("base-url").then((baseurl) => {
            return cy.fixture(fixtureName).then((platform) => {
                let url_visit;

                if (url1 === "جزئیات" || url1 === "PDF") {
                    return cy.get("@ID", {timeout: 5000}).then((ID) => {
                        url_visit = `${baseurl.url}${platform[url1][url2]}${ID}`;
                        return cy.intercept(method, url_visit);
                    });
                }

                url_visit = `${baseurl.url}${platform[url1][url2]}`;
                return cy.intercept(method, url_visit);
            });
        });
    },

    waitForAPIResponse(alias, statusCode) {
        return cy.wait(alias)
            .its('response.statusCode')
            .should('eq', statusCode)
    },

    clickOnBody() {
        return cy.get("body").click(0, 0)
    },


    assertNumOfChildren(parent, child, num) {
        cy.get(parent) // or any selector for the outer div
            .children()
            .find(child)
            .should('have.length', num);
    },

    typeInInput(element, myText) {
        element.type(myText, {delay: 50});
    },

    checkElementExists(element) {
      cy.get(element).should('exist');
    }

};