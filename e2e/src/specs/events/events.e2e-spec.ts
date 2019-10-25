import { EventPage } from '../../pageobjects/eventpage.po';
import { browser, logging, element, by } from 'protractor';

describe('Event Page', () => {
  const page = new EventPage();

  beforeAll(async () => {
    console.log('Starting Event Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('Events | Access Events Cards', async () => {
    const eventsCardsHeadline = await page.eventsCards.getText();
    expect(eventsCardsHeadline).toEqual('PGA of America Championships');
    await page.scrollCenter(page.eventsCards);
  });

  it('Events | Access PGAs Regional events', async () => {
    const eventsRegionalHeadline = await page.eventsRegionalHeadline.getText();
    expect(eventsRegionalHeadline).toEqual('Regional Events');
    await page.scrollStart(page.eventsRegionalHeadline);
    await browser.sleep(1000);
  });
  it('Events | Access Current Leaderboards events', async () => {
    const eventsCurrentLeaderboardHeadline = await page.eventsCurrentLeaderboardHeadline.getText();
    expect(eventsCurrentLeaderboardHeadline).toEqual('Current Leaderboards');
    await page.scrollStart(page.eventsCurrentLeaderboardHeadline);
  });

  it('Events | Access PGA Tour events  leaderboard', async () => {
    await page.expectVisibility(page.eventsPgaTour);
    await page.scrollCenter(page.eventsPgaTour);
    await page.eventsPgaTour.click();
    await page.expectVisibility(page.eventPgaTourLeaderboardTitle);
  });

  it('Events | View an event page', async () => {
    await page.navigateToWeb(page.eventPageLink);
    await page.expectVisibility(page.eventPageText);
    await browser.sleep(1000);
  });
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
