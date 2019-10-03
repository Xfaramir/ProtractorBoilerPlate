import BasePage from './basepage';
import { element, by, $$, ElementFinder, browser } from 'protractor';

class HomePage extends BasePage {
  searchBox: ElementFinder;
  addnameBox: ElementFinder;

  constructor() {
    super();
    this.searchBox = element(by.model('search'));
    this.addnameBox = element(by.model('addName'));

    this.url = 'angular/friends/';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
  }

  searchFor(parameter: string) {
    return this.searchBox.sendKeys(parameter);
  }
}

export default new HomePage();
