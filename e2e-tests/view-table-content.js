describe('Table tests', function() {
    it('should navigate to table page', function() {
        const databaseUrl = 'http://localhost:3000/databases/firstDb';

        browser.get(databaseUrl);
        browser.waitForAngular();

        const el = element.all(by.css('a.list-group-item')).last();

        el.getText().then((tableName) => {
            el.click();

            expect(element(by.tagName('h2')).getText()).toBe(tableName);

            expect(browser.getCurrentUrl()).toBe(`${databaseUrl}/${tableName}`);
        });
    });
});