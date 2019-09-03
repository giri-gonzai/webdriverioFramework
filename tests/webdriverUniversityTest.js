describe("Verify: WebDriverUniversity Link is Active", function() {
    it("Check the Contact Us Link", function(done) {
        browser.setViewportSize({
        width: 1200,
        height: 800
        })
        browser.url('/')
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Homepage Title is: ' + title);
        
        browser.click("#contact-us");
        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');
        
        var url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL Mismatch');
        browser.close(); 
    });
    
    
    it("Check the Login Portal Link & Get Title of the page", function(done) {
        browser.url('/')
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Login Portal Title is: ' + title);

        browser.click('#login-portal')
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Login Portal');
        
        var url = browser.getUrl();
        expect(url).to.include('Login-Portal', 'URL Mismatch');
    });
});