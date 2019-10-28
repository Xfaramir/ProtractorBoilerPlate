import { SearchPage } from '../pageobjects/searchpage.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('Search Page', () => {
  const searchPage = new SearchPage();

  beforeAll(async () => {
    console.log('Starting Search page');
    await searchPage.navigateTo();
  });

  beforeEach(async () => {});

  it('should do a search', async () => {
    await searchPage.searchNavButton.click();
    await searchPage.searchNavInput.sendKeys('Help');
  });

  it('should clear search results', async () => {
    await searchPage.searchButton.click();
    await searchPage.expectVisibility(searchPage.searchBar);
    await searchPage.searchClearButton.click();
  });

  it('should do another query from fixed search bar', async () => {
    await searchPage.searchBar.sendKeys('pga');
    await searchPage.searchResultButton.click();
    await searchPage.expectVisibility(searchPage.searchResultSpan);

    const queryResults = await searchPage.searchResultSpan.getText();
    console.log(queryResults);
  });
  // if only testing search please uncomment lines below.

  // it('should close gdrp banner', async () => {
  //   await searchPage.expectVisibility(searchPage.bannerGDRP);
  //   await searchPage.bannerGDRP.click();
  //   await searchPage.expectInVisibility(searchPage.bannerGDRP);
  // });

  it('should do click on next pagination button', async () => {
    await searchPage.expectElement(searchPage.searchPaginationButton);
    await searchPage.searchPaginationButton.click();
    await searchPage.expectVisibility(searchPage.searchPaginationButton);
    await searchPage.scrollCenter(searchPage.searchPaginationButton);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser
    //   .manage()
    //   .logs()
    //   .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
