import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
export class HomeSearchPage extends BasePage {
  searchBreadCrumbs: ElementFinder;
  constructor() {
    super();
    this.url = 'https://dbeofnzbx0eyo.cloudfront.net/';

    this.searchBreadCrumbs = element(
      by.js(() => {
        document.querySelector(
          'div:nth-child(1) > header > div > div > button'
        );
      })
    );
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }

  getSearchBreadCrumbs() {
    return this.searchBreadCrumbs;
  }
}
