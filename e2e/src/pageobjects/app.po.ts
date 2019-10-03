import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basepage';

export class AppPage extends BasePage {
  header: any;

  constructor() {
    super();

    this.header = element(
      by.js(() => {
        return document.querySelector(
          'div:nth-child(5) > div:nth-child(1) > h3'
        );
      })
    );
  }

  async getTitleText(): Promise<string> {
    return this.header.getText();
  }
  async navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl);
  }
}
