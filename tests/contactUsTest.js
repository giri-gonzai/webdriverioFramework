var request = require('sync-request');

beforeEach('Accessing Contact Us URL', function() {
    browser.url('/Contact-Us/contactus.html');
});

describe('WebdriverUni: Test Contact Us Page', function() {

    var res_data = request('GET', 'https://jsonplaceholder.typicode.com/users');
    var contactusDetails = JSON.parse(res_data.getBody().toString('utf8'));

    var firstNameSelector = "[name='first_name']"; 
    var lastNameSelector = "[name='last_name']"; 
    var emailAddressSelector = "[name='email']"; 
    var messageSelector = "[name='message']"; 
    var successfulSubmissionSelector = "#contact_reply h1";
    var unsuccessfulSubmissionSelector = "body";
    var submitButtonSelector = "[type='submit']";

    function setFirstName(firstName){ 
        return browser.setValue(firstNameSelector, firstName);
    } 
    function setLastName(LastName){
        return browser.setValue(lastNameSelector, LastName);
    }
    function setEmailAddress(emailAddress){
        return browser.setValue(emailAddressSelector, emailAddress);
    }
    function setMessage(messageBox){
        return browser.setValue(messageSelector, messageBox);
    }
    function clickSubmitButton(){
        return browser.click(submitButtonSelector);
    }
    function confirmSuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(successfulSubmissionSelector) == 'Thank You for your Message!'
        }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    function confirmUnsuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(unsuccessfulSubmissionSelector) == 'Error: all fields are required'
        }, 3000);
        expect(browser.getText(unsuccessfulSubmissionSelector)).to.include('Error: all fields are required');
    }

   contactusDetails.forEach(function (contactusJSONDetails) {    
    it('Positive Test: Should be able to submit a successful submission via contact us form', function(done) {
        
        setFirstName(contactusJSONDetails.username);
        setLastName(contactusJSONDetails.name);
        setEmailAddress(contactusJSONDetails.email);
        setMessage(contactusJSONDetails.address.city);
        clickSubmitButton();
        confirmSuccessfullSubmission();         
        });
    });

    contactusDetails.forEach(function (contactusJSONDetails) { 
    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {
    
        setFirstName(contactusJSONDetails.username);
        setLastName(contactusJSONDetails.name);
        setEmailAddress(contactusJSONDetails.email);
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        });
    });

    contactusDetails.forEach(function (contactusJSONDetails) { 
    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {

        setFirstName(contactusJSONDetails.username);
        setEmailAddress(contactusJSONDetails.email);
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        });
    });

    contactusDetails.forEach(function (contactusJSONDetails) { 
    it('Negative Test: Should not be able to submit a successful submission via contact us form as all field are required', function(done) {
       
        setLastName(contactusJSONDetails.name);
        setEmailAddress(contactusJSONDetails.email);
        setMessage(contactusJSONDetails.address.city);
        clickSubmitButton();
        confirmUnsuccessfullSubmission();
        }); 
    });
});