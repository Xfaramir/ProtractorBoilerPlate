import { EventPage } from '../../pageobjects/eventpage.po';
import { browser, logging, element, by } from 'protractor';

describe('Leadearboard Page', () => {
  const page = new EventPage();

  beforeAll(async () => {
    console.log('Starting Leaderboard Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('Access Leadearboard and display player scorecard', async () => {
    await page.navigateToWeb(page.pgaTourUrl);
    await page.expectVisibility(page.eventPgaTourLeaderboardTitle);

    const scorecards = await page.leaderboardScorecards;
    await scorecards[0].click();
    await page.expectVisibility(page.leaderBoardRoundsElement);
  });

  xit('Open Top 5 Scorecards', async () => {});

  xit('Open All Scorecards', async () => {});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
