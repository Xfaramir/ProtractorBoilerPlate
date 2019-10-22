import { SearchPage } from '../../pageobjects/searchpage.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('Search Page', () => {
  let searchPage: SearchPage;

  beforeAll(async () => {
    console.log('Starting Search page');

    searchPage = new SearchPage();
    await searchPage.navigateTo();
  });

  beforeEach(async () => {});

  it('should do a search', async () => {
    await searchPage.searchNavButton.click();
    await searchPage.searchNavInput.sendKeys('Help');
  });

  it('should clear search results', async () => {
    await searchPage.sendEnter();
    await searchPage.expectClickable(searchPage.searchClearButton);
    await searchPage.searchClearButton.click();
  });

  it('should do another query from fixed search bar', async () => {
    await searchPage.searchBar.sendKeys('pga');
    await searchPage.sendEnter();
    await searchPage.expectVisibility(searchPage.searchPaginationButton);
  });

  it('should do click on next pagination button', async () => {
    await searchPage.searchPaginationButton.click();
    await searchPage.expectVisibility(searchPage.searchPaginationButton);
    await searchPage.scrollCenter(searchPage.searchPaginationButton);
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
