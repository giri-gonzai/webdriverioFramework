beforeEach(function() {
  browser.url("/Accordion/index.html");
})

describe('Validate text is present', function() {
  it('Verify text exists within the loading div container', function () {
    this.timeout(20000);

    var waitForValue = browser.waitForValue('#hidden-text', 12000);
    console.log(waitForValue);
    });
});