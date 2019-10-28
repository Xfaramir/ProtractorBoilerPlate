import { browser, by, element, ElementFinder } from 'protractor';
import BasePage from './basePage';

browser.waitForAngularEnabled(false);

export class EventPage extends BasePage {
  eventsCards: ElementFinder;
  eventsRegionalHeadline: ElementFinder;
  eventsCurrentLeaderboardHeadline: ElementFinder;
  eventsPgaTour: ElementFinder;
  eventPgaTourLeaderboardTitle: ElementFinder;
  eventPageLink: string;
  eventPageText: ElementFinder;
  pgaTourUrl: string;
  lpgaTourUrl: string;
  pgaaTourUrl: string;
  leaderboardScorecards: any;
  leaderBoardRoundsElement: ElementFinder;
  constructor() {
    super();
    this.url = 'http://beta.pga.com/events';
    this.eventsCards = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[2]/div[1]/h4')
    );
    this.eventsRegionalHeadline = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[3]/div/div[1]/h4')
    );
    this.eventsCurrentLeaderboardHeadline = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[4]/div/div[1]/h4')
    );
    this.eventsPgaTour = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[4]/div/div[2]/div[1]/a')
    );

    this.eventPgaTourLeaderboardTitle = element(
      by.xpath('//*[@id="__next"]/div/div[2]/article/div[2]/div/div[2]/div')
    );

    this.eventPageLink = 'https://beta.pga.com/events/pga-championship-2020';

    this.eventPageText = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div[1]/div[2]/div/div/p[1]')
    );

    this.leaderBoardRoundsElement = element(
      by.css('button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit')
    );

    this.pgaTourUrl =
      'http://beta.pga.com/events/leaderboards/pga-tour';
    this.lpgaTourUrl =
      'http://beta.pga.com/events/leaderboards/lpga-tour';
    this.pgaaTourUrl =
      'http://beta.pga.com/events/leaderboards/champions-tour';

    this.leaderboardScorecards = element.all(by.css('.jss257.jss258'));
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
