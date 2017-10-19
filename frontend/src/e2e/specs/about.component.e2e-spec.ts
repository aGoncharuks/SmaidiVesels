import { browser, by, element } from 'protractor';

describe('About', () => {

  beforeEach(async () => {
    return await browser.get('/study');
  });

  it('should have correct feature heading', async () => {
    const text = await element(by.css('sd-study h2')).getText();
    expect(text).toEqual('Features');
  });

});
