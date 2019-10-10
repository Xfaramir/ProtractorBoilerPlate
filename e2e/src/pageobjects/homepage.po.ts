import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
export class HomePage extends BasePage {
  header: any;
  leaderboardPlayer: ElementFinder;
  coachImage: ElementFinder;
  bannerGDRP: ElementFinder;
  coachButton: ElementFinder;
  videoButton: ElementFinder;
  videoCloseButton: ElementFinder;

  constructor() {
    super();
    this.url = 'https://dbeofnzbx0eyo.cloudfront.net/';
    this.header = element(
      by.js(() => {
        return document.querySelector(
          'div.jss113 > div:nth-child(1) > div > div:nth-child(4) a h2'
        );
      })
    );

    this.leaderboardPlayer = element(
      by.js(() => {
        return document.querySelector('div.MuiBox-root.jss291 > a');
      })
    );

    this.coachImage = element(
      by.js(() => {
        return document.querySelector('div.jss351.jss360.jss321');
      })
    );
    this.coachButton = element(
      by.xpath(
        '(.//*[normalize-space(text()) and normalize-space(.)="Eric Hogge,"])[3]/following::div[3]'
      )
    );

    this.bannerGDRP = element(
      by.js(() => {
        return document.querySelector('.jss416');
      })
    );

    this.videoButton = element(
      by.js(() => {
        return document.querySelector('div.jss478');
      })
    );

    this.videoCloseButton = element(
      by.js(() => {
        return document.querySelector(
          'body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > button'
        );
      })
    );
  }

  async getTitleText(): Promise<string> {
    return this.header.getText();
  }
  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }

  getLeaderboardButton(): ElementFinder {
    return this.leaderboardPlayer;
  }

  getCoachButton(): ElementFinder {
    return this.coachButton;
  }

  getCoachImage(): ElementFinder {
    return this.coachImage;
  }
  getBannerGDRP(): ElementFinder {
    return this.bannerGDRP;
  }
  getVideoButton(): ElementFinder {
    return this.videoButton;
  }
  getVideoCloseButton(): ElementFinder {
    return this.videoCloseButton;
  }
}