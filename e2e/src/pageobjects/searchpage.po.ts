import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;

export class SearchPage extends BasePage {
  searchClearButton: ElementFinder;
  searchPaginationButton: ElementFinder;
  searchBar: ElementFinder;
  searchResultSpan: ElementFinder;

  constructor() {
    super();
    this.url = 'https://d2eam07qccllcf.cloudfront.net/search';
    this.searchClearButton = element(by.css('.jss377 button'));

    this.searchBar = element(
      by.css('.jss106 > div > div > div > div > div > input')
    );

    this.searchPaginationButton = element(
      by.css('.jss106  button:nth-child(10)')
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
