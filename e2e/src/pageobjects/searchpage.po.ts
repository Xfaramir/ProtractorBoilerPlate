import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;

export class SearchPage extends BasePage {
  searchClearButton: ElementFinder;
  searchPaginationButton: ElementFinder;
  searchBar: ElementFinder;
  searchResultSpan: ElementFinder;
  searchButton: ElementFinder;
  searchResultButton: ElementFinder;

  constructor() {
    super();
    this.url = 'http://beta.pga.com/search';
    this.searchClearButton = element(
      by.xpath('/html/body/div/div/div[2]/div/div/div[1]/div/button')
    );

    this.searchBar = element(
      by.css('.jss106 > div > div > div > div > div > input')
    );
    this.searchButton = element(
      by.xpath('/html/body/div[2]/div[3]/div[2]/nav/div[1]/button')
    );
    this.searchResultButton = element(
      by.xpath('/html/body/div/div/div[2]/div/div/div[1]/div/button')
    );
    this.searchPaginationButton = element(
      by.xpath('/html/body/div/div/div[2]/div/div/div[3]/div/button[10]')
    );
    this.searchResultSpan = element(
      by.css('.MuiBox-root.jss106 > div > div > div > span')
    );
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }

  async getResultText() {
    await this.searchResultSpan.getText();
  }
}
