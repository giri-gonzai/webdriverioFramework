describe('Test: Button clickable after the Ajax Loader has been successfully executed with pause command', function() {
    it('Test 1: Click on the button ASAP', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click("#button1");
    })

    it('Test 2: Click on the button after 7 Seconds', function(done) {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000);
        browser.pause(7000);
        browser.click("#button1");
        browser.pause(7000);
    })
})