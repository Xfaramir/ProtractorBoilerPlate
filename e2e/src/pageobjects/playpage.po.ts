import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;

export class PlayPage extends BasePage {
  playSearchBar: ElementFinder;
  playTravelDestination: ElementFinder;
  playFeatureCourse: ElementFinder;
  playFacility: ElementFinder;
  playFacilityCoaches: ElementFinder;
  constructor() {
    super();
    this.url = 'https://d2eam07qccllcf.cloudfront.net/play';

    this.playSearchBar = element(by.css('.jss108 input'));
    this.playTravelDestination = element(by.css('.jss173 h4'));
    this.playFeatureCourse = element(by.css('.jss326 > div > div > span'));
    this.playFeatureCourse = element(by.css('.jss326 > div > div > span'));
    this.playFacility = element(
      by.css('.jss434 div:nth-child(3) .MuiGrid-root :nth-child(1) > a')
    );
    this.playFacilityCoaches = element(by.css('div.MuiBox-root > h5'));
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
