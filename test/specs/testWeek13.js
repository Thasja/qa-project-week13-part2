describe('Google page', () => {

    beforeAll('open browser', () => {
        return browser.url('https://google.com');
    });

    it('Type Wikipedia in search field', () => {
        let input = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        input.addValue('Wikipedia');
        browser.keys('Enter');
    })

    it('Click on Wikipedia link', () => {
        const wikiLink = $('#rso > div > div:nth-child(1) > div > div > div.yuRUbf > a > h3');
        wikiLink.click();
    });

    it('Compare url', () => {
        browser.pause(2000);
        expect(browser.getUrl()).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
});
