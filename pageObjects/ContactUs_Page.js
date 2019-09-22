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
        return $("#contact_reply");
    }
    get unsuccessfulSubmission() {
        return $("body");
    }
    get successfulSubmissionText() {
        return this.successfulSubmission.getText();
    }
    get unsuccessfulSubmissionText() {
        return this.unsuccessfulSubmission.getText();
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
    }
}

module.exports = new ContactUs_Page();