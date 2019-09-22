var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach('Accessing Contact Us URL', async()  => {            //Using async wait requests
    await browser.url('/Contact-Us/contactus.html');            //Using await command
});

describe('WebdriverUni: Test Contact Us Page', ()  => {     //Following POM Phase 1

    it('Positive Test: Should be able to submit a successful submission via contact us form', ()  => {  
        ContactUs_Page.submitAllInformationContactUsForm('GG', 'Gogo', 'gg@mail.com', 'NY');
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_Page.setFirstName('GG');
        ContactUs_Page.setLastName('Gogo');
        ContactUs_Page.setEmailAddress('gg@mail.com');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfullSubmission();
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_Page.setFirstName('GG');
        ContactUs_Page.setEmailAddress('gg@mail.com');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfullSubmission();
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_Page.setLastName('Gogo');
        ContactUs_Page.setEmailAddress('gg@mail.com');
        ContactUs_Page.setMessage('NY');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfullSubmission();
        }); 
});