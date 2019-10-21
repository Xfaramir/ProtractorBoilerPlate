import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
export class HomePage extends BasePage {
  leaderboardButton: ElementFinder;
  coachImage: ElementFinder;
  bannerGDRP: ElementFinder;
  coachButton: ElementFinder;
  videoButton: ElementFinder;
  videoCloseButton: ElementFinder;
  pgaOfAmericaHeadline: ElementFinder;
  levelUpButton: ElementFinder;
  header: ElementFinder;
  coachCarrouselImage: ElementFinder;
  coachOverlayCloseButton: ElementFinder;
  topStoriesHeadline: ElementFinder;
  pgaReachHeadline: ElementFinder;
  footer: ElementFinder;
  searchBreadCrumbs: ElementFinder;
  searchInput: ElementFinder;
  connectButton: ElementFinder;
  escapeButton: ElementFinder;
  coachOverlayVideoButton: ElementFinder;

  constructor() {
    super();
    this.url = 'https://d2eam07qccllcf.cloudfront.net/';

    this.header = element(
      by.js(() => {
        return document.querySelector(
          '#__next > div > div.MuiBox-root.jss106 > div.jss107 > div.jss113 > div:nth-child(1) > div > div:nth-child(4) > div > div > div > a > div'
        );
      })
    );

    this.bannerGDRP = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiDrawer-root.MuiDrawer-docked button'
        );
      })
    );

    this.leaderboardButton = element(by.css('.jss276 h2'));

    this.pgaOfAmericaHeadline = element(by.css('.jss330 p'));

    this.levelUpButton = element(by.css('.jss335 h6:nth-child(1)'));
    this.connectButton = element(by.css('.jss335 h6:nth-child(2)'));
    this.escapeButton = element(by.css('.jss335 h6:nth-child(3)'));

    this.coachCarrouselImage = element(
      by.css('.jss332 > div:nth-child(3) div:nth-child(3)')
    );

    this.coachOverlayVideoButton = element(by.css('use'));

    this.coachOverlayCloseButton = element(
      by.css('svg.MuiSvgIcon-root.jss338 > path')
    );

    this.topStoriesHeadline = element(by.css('.jss403 h4'));

    this.pgaReachHeadline = element(by.css('.jss438 > div > p'));
    this.footer = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div:nth-child(2) > div > span'
        );
      })
    );

    this.searchBreadCrumbs = element(by.css('svg.MuiSvgIcon-root'));
    this.searchInput = element(by.css('.jss24 input'));
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
