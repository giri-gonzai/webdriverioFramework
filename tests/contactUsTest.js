var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");


beforeEach('Accessing Contact Us URL', function() {
    browser.url('/Contact-Us/contactus.html');
});

describe('WebdriverUni: Test Contact Us Page', function() {     //Following POM Phase 1
    it('Positive Test: Should be able to submit a successful submission via contact us form', function(done) {
        
        setFirstName('GG');
        setLastName('Gogo');
        setEmailAddress('gg@mail.com');
        setMessage('NY');
        clickSubmitButton();
        confirmSuccessfullSubmission();         
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {
    
        setFirstName('GG');
        setLastName('Gogo');
        setEmailAddress('gg@mail.com');
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {

        setFirstName('GG');
        setEmailAddress('gg@mail.com');
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        });

    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {
       
        setLastName('Gogo');
        setEmailAddress('gg@mail.com');
        setMessage('NY');
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        }); 
});