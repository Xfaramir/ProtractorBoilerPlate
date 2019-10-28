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
  playSearch: ElementFinder;
  playCourseFacilityUrl: string;
  constructor() {
    super();
    this.url = 'http://beta.pga.com/play';

    this.playSearchBar = element(by.css('.jss108 input'));
    this.playSearch = element(
      by.xpath('/html/body/div/div/div[2]/div/div[1]/div/div/div[1]/button')
    );
    this.playTravelDestination = element(by.css('.jss173 h4'));
    this.playFeatureCourse = element(by.css('.jss326 > div > div > span'));
    this.playFeatureCourse = element(by.css('.jss326 > div > div > span'));
    this.playFacility = element(by.css('.MuiGrid-grid-md-6 > a:nth-child(1)'));
    this.playFacilityCoaches = element(by.css('div.MuiBox-root > h5'));
    this.playCourseFacilityUrl =
      'http://beta.pga.com/play/AK/wasilla/settlers-bay-golf-course/27012549';
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
