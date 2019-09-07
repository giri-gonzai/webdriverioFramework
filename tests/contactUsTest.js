var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");


beforeEach('Accessing Contact Us URL', function() {
    browser.url('/Contact-Us/contactus.html');
});

describe('WebdriverUni: Test Contact Us Page', function() {     //Following POM Phase 1

    function setFirstName(firstName){ 
        return ContactUs_Page.firstName.setValue(firstName);
    } 
    function setLastName(lastName){
        return ContactUs_Page.lastName.setValue(lastName);
    }
    function setEmailAddress(emailAddress){
        return ContactUs_Page.emailAddress.setValue(emailAddress);
    }
    function setMessage(comments){
        return ContactUs_Page.comments.setValue(comments);
    }
    function clickSubmitButton(){
        return ContactUs_Page.submitButton.click();
    }
    function confirmSuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return ContactUs_Page.successfulSubmission.getText() == 'Thank You for your Message!'
        }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    function confirmUnsuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return ContactUs_Page.unsuccessfulSubmission.getText() == 'Error: all fields are required'
        }, 3000);
        expect(ContactUs_Page.unsuccessfulSubmission.getText()).to.include('Error: all fields are required');
    }
   
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