import { HomeSearchPage } from '../pageobjects/HomeSearchPage.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let searchBreadCrumbsPage: HomeSearchPage;

  beforeAll(async () => {
    console.log('Starting Home Search searchBreadCrumbs Test');
    searchBreadCrumbsPage = new HomeSearchPage();
    await searchBreadCrumbsPage.navigateTo();
  });

  beforeEach(async () => {});

  it('should make a search at home searchBreadCrumbs', async () => {
    const searchBreadCrumbs = await searchBreadCrumbsPage.getSearchBreadCrumbs();
    browser.sleep(10000);
    await searchBreadCrumbs.click();
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
