import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;
export class LearnPage extends BasePage {
  learnHero: ElementFinder;
  learnInstructional: ElementFinder;
  learnBrowseInstructional: ElementFinder;
  learnViewInstructional: ElementFinder;
  constructor() {
    super();

    this.url = 'https://d2eam07qccllcf.cloudfront.net/learn';
    this.learnHero = element(by.css('.jss106 div:nth-child(4) a > h2'));
    this.learnInstructional = element(by.css('.jss293 h5'));
    this.learnBrowseInstructional = element(by.css('h6:nth-child(4)'));
    this.learnViewInstructional = element(
      by.xpath(
        '//*[@id="__next"]/div/div[2]/div/div[3]/div[3]/div[4]/div/div[1]/a'
      )
    );
  }
  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
