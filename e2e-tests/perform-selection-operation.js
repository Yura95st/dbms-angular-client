describe('Protractor Demo App', function() {
    it('should perform selection operation', function() {
        columns = element.all((by.css('th')));
        
        expect(columns.count()).toBeGreaterThan(1);

        element.all((by.css('option'))).first().click();

        expect(columns.count()).toBe(1);
    });
});