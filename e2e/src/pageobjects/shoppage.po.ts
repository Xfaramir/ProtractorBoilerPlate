import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;

export class ShopPage extends BasePage {
  shopTradeButton: ElementFinder;
  shopMerchandise: ElementFinder;
  constructor() {
    super();
    this.url = 'http://beta.pga.com/shop';
    this.shopTradeButton = element(
      by.xpath(
        '//*[@id="__next"]/div/div[2]/div/div[1]/div[2]/div[1]/div/button[2]'
      )
    );

    this.shopMerchandise = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[2]/div/h6')
    );
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
