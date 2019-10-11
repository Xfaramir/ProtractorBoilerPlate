import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
export class HomePage extends BasePage {
  leaderboardButton: ElementFinder;
  coachImage: ElementFinder;
  bannerGDRP: ElementFinder;
  coachButton: ElementFinder;
  videoButton: ElementFinder;
  videoCloseButton: ElementFinder;
  pgaOfAmericaHeadline: ElementFinder;
  winButton: ElementFinder;
  header: ElementFinder;
  coachCarrouselImage: ElementFinder;
  coachOverlayCloseButton: ElementFinder;
  seriesHeadline: ElementFinder;
  pgaReachHeadline: ElementFinder;
  footer: ElementFinder;
  searchBreadCrumbs: ElementFinder;
  searchInput: ElementFinder;

  constructor() {
    super();
    this.url = 'https://d3uuen9uojwc0p.cloudfront.net/';

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

    this.leaderboardButton = element(
      by.js(() => {
        return document.querySelector('div.MuiBox-root.jss274 h2');
      })
    );

    this.pgaOfAmericaHeadline = element(
      by.js(() => {
        return document.querySelector(
          'div:nth-child(4) > div.MuiBox-root.jss294 > a'
        );
      })
    );

    this.winButton = element(
      by.js(() => {
        return document.querySelector('div.jss331 > div.jss334 > div > h6');
      })
    );

    this.coachCarrouselImage = element(
      by.js(() => {
        return document.querySelector('div.jss365.jss374.jss335 > div > h5');
      })
    );

    this.coachOverlayCloseButton = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiDialog-container.MuiDialog-scrollPaper > div > button'
        );
      })
    );

    this.seriesHeadline = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiBox-root.jss393 > div.MuiBox-root.jss394.jss383.jss392 > div > div > a > span'
        );
      })
    );

    this.pgaReachHeadline = element(
      by.js(() => {
        return document.querySelector('div.MuiBox-root.jss417 > div > span');
      })
    );
    this.footer = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div:nth-child(2) > div > span'
        );
      })
    );

    this.searchBreadCrumbs = element(by.css('svg.MuiSvgIcon-root'));
    this.searchInput = element(
      by.xpath(
        "(.//*[normalize-space(text()) and normalize-space(.)='Privacy Policy'])[2]/following::input[1]"
      )
    );
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }

  async getHeader(): Promise<ElementFinder> {
    return this.header;
  }

  getFooter(): ElementFinder {
    return this.footer;
  }

  getBannerGDRP(): ElementFinder {
    return this.bannerGDRP;
  }

  getLeaderboardButton(): ElementFinder {
    return this.leaderboardButton;
  }

  getPgaOfAmericaHeadline(): ElementFinder {
    return this.pgaOfAmericaHeadline;
  }
  getWinButton(): ElementFinder {
    return this.winButton;
  }
  getCoachCarrouselImage(): ElementFinder {
    return this.coachCarrouselImage;
  }
  getCoachOverlayButton(): ElementFinder {
    return this.coachOverlayCloseButton;
  }
  getSeriesHeadline(): ElementFinder {
    return this.seriesHeadline;
  }
  getPgaReachHeadline(): ElementFinder {
    return this.pgaReachHeadline;
  }
  getSearchBreadCrumbs(): ElementFinder {
    return this.searchBreadCrumbs;
  }
  getSearchInput(): ElementFinder {
    return this.searchInput;
  }
}
