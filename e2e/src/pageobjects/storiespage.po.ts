import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;

export class StoriesPage extends BasePage {
  storiesAllUrl: string;
  storiesArchiveUrl: string;
  storiesHeadline: ElementFinder;
  storiesPagination: ElementFinder;
  storiesArchiveVideo: ElementFinder;
  constructor() {
    super();
    this.url = 'https://d2eam07qccllcf.cloudfront.net/stories';
    this.storiesAllUrl = 'https://d2eam07qccllcf.cloudfront.net/stories/all';
    this.storiesArchiveUrl =
      'https://d2eam07qccllcf.cloudfront.net/archive/events/pgachampionship/what-winning-open-championship-means-pga-championship';

    this.storiesHeadline = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[1]/div/div/h1')
    );

    this.storiesPagination = element(
      by.xpath(
        '//*[@id="__next"]/div/div[2]/div/div[2]/div/div[3]/div/button[10]'
      )
    );

    this.storiesArchiveVideo = element(
      by.css(' div.html5-video-container > video')
    );
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
