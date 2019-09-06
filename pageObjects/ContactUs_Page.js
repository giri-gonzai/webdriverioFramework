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
    get messageField() {
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

module.exports = new ContactUs_Page();