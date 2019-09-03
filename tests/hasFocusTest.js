describe('Test Checkbox Buttons Page', function() {
	browser.url("Dropdown-Checkboxes-RadioButtons/index.html");

	it('Should be able to focus on checkbox button elements', function(done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
			});
		browser.pause(2000);
		browser.click('#checkboxes label:nth-of-type(1) [type]'); //#1st Checkbox (non selected)
		var checkboxOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
		console.log('The value of checkbox one is: ' +checkboxOne);
		expect(checkboxOne, 'The checkbox (One) has focus!').to.be.true;

		var checkboxTwo = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
		console.log('This checkbox is preselected: ' +checkboxTwo);
		expect(checkboxTwo, 'The checkbox (Two) has focus!').to.be.false; //#2nd Checkbox (pre-selected)
	});
});  