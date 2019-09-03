describe("Testing the css property: ", function() {
    it("CSS Property: Height of the Video Div Box", function() {
        browser.url('/');
        browser.pause(2000);
        var divHeight = browser.getCssProperty('#udemy-promo-video', 'height');
        console.log(divHeight);
    });

    it("CSS Property: Color of the Video Div Box", function() {
        var divColor = browser.getCssProperty('#udemy-promo-video', 'color');
        console.log(divColor);
    });
});