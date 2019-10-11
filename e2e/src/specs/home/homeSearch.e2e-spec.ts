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
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
    await browser.sleep(2000);
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
