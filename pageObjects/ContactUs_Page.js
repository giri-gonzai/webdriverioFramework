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

    setFirstName(firstName){                           //Advanced POM Framwork Abstraction
        return this.firstName.setValue(firstName);
    } 
    setLastName(lastName){
        return this.lastName.setValue(lastName);
    }
    setEmailAddress(emailAddress){
        return this.emailAddress.setValue(emailAddress);
    }
    setMessage(comments){
        return this.comments.setValue(comments);
    }
    clickSubmitButton(){
        return this.submitButton.click();
    }

    submitAllInformationContactUsForm(firstName, lastName, emailAddress, comments) {
        if(firstName) {
            this.firstName.setValue(firstName);
        }
        if(lastName) {
            this.lastName.setValue(lastName);
        }
        if(emailAddress) {
            this.emailAddress.setValue(emailAddress);
        }
        if(comments) {
            this.comments.setValue(comments);
        }
        this.submitButton.click();
        this.confirmSuccessfullSubmission();
    }

    confirmSuccessfullSubmission() {
        var successfulSubmission = "#contact_reply";
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(successfulSubmission) == 'Thank You for your Message!'
    }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    confirmUnsuccessfullSubmission() {
        var unsuccessfulSubmission = "body";
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(unsuccessfulSubmission) == 'Error: all fields are required'
    }, 3000);
        expect(browser.getText(unsuccessfulSubmission)).to.include('Error: all fields are required');
    }
}

module.exports = new ContactUs_Page();