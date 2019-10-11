import { HomePage } from '../../pageobjects/homepage.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let searchPage: HomePage;

  beforeAll(async () => {
    console.log('Starting Home Search searchBreadCrumbs Test');
    searchPage = new HomePage();
    await searchPage.navigateTo();
  });

  beforeEach(async () => {});

  it('should make a search at home searchBreadCrumbs', async () => {
    await searchPage.getSearchBreadCrumbs().click();
    await searchPage.getSearchInput().sendKeys('help');
    await searchPage.sendEnter();
    await browser.sleep(2000);
  });

  it('should do clear results', async () => {
    await element(
      by.js(() => {
        return document.querySelector(
          '#__next > div > div.MuiBox-root.jss106 > div.jss534 > div > div.jss539.jss541 > div > button'
        );
      })
    ).click();
   
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
