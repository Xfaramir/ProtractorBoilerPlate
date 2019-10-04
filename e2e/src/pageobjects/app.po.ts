import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basepage';

browser.waitForAngularEnabled(false);
export class AppPage extends BasePage {
  header: any;
  leaderboardPlayer: ElementFinder;
  coachImage: ElementFinder;
  bannerGDRP: ElementFinder;
  coachButton: ElementFinder;

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
        return document.querySelector('div.MuiBox-root.jss478 > a');
      })
    );

    this.coachImage = element(
      by.js(() => {
        return document.querySelector('div.jss337.jss346.jss308 h5');
      })
    );
    this.coachButton = element(
      by.xpath(
        "(.//*[normalize-space(text()) and normalize-space(.)='Eric Hogge,'])[3]/following::div[3]"
      )
    );

    this.bannerGDRP = element(
      by.js(() => {
        return document.querySelector('.jss402');
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
}
