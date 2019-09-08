class ContactUs_Page {                                      //Creating POM Classes: Phase 2 - Using Abstraction
    get firstName() {                                         //First POM Method
        return $("[name='first_name']");
    }
    get lastName() {
        return $("[name='last_name']");
    }
    get emailAddress() {
        return $("[name='email']");
    }
    get comments() {
        return $("[name='message']");
    }
    get submitButton() {
        return $("[type='submit']");
    }
    get successfulSubmission() {
        return $("#contact_reply h1");
    }
    get unsuccessfulSubmission() {
        return $("body");
    }
}

    function setFirstName(firstName){                           //Advanced POM Framwork Abstraction
        return this.firstName.setValue(firstName);
    } 
    function setLastName(lastName){
        return this.lastName.setValue(lastName);
    }
    function setEmailAddress(emailAddress){
        return this.emailAddress.setValue(emailAddress);
    }
    function setMessage(comments){
        return this.comments.setValue(comments);
    }
    function clickSubmitButton(){
        return this.submitButton.click();
    }
    function confirmSuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return this.successfulSubmission.getText() == 'Thank You for your Message!'
    }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    function confirmUnsuccessfullSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function() {
            return this.unsuccessfulSubmission.getText() == 'Error: all fields are required'
    }, 3000);
        expect(this.unsuccessfulSubmission.getText()).to.include('Error: all fields are required');
    }

module.exports = new ContactUs_Page();