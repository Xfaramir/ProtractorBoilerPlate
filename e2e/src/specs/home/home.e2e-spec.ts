import { HomePage } from '../../pageobjects/homePage.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeAll(async () => {
    console.log('Starting Home Test');
    page = new HomePage();
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should display headline call to action', async () => {
    const header = await page.getHeader();
    expect(header.getText()).toEqual('CALL TO ACTION');
  });
  it('should close gdrp banner', async () => {
    await page.getBannerGDRP().click();
  });
  it('should display leaderboard', async () => {
    await page.scrollInto(page.getLeaderboardButton());
  });

  it('should display pga of America', async () => {
    await page.scrollInto(page.getPgaOfAmericaHeadline());
  });
  it('should display win', async () => {
    await page.scrollInto(page.getWinButton());
  });

  it('should click open coach carrousel image overlay', async () => {
    await page.expectElement(page.getCoachCarrouselImage().click());
  });

  // it('should play video', async () => {
  //   await browser.sleep(100);
  // });

  it('should open close overlay', async () => {
    await page.expectElement(page.getCoachOverlayButton().click());
  });

  it('should display headline top series', async () => {
    const headline = page.getSeriesHeadline();
    const headlineText = await headline.getText();
    expect(headlineText).toEqual('SERIES');
    await page.scrollInto(headline);
  });

  it('should open display pga reach', async () => {
    await page.scrollInto(page.getPgaReachHeadline());
  });

  it('should display footer', async () => {
    const footer = page.getFooter();
    const footerText = await footer.getText();
    expect(footerText).toEqual('EXPLORE');
    await page.expectAndFocus(footer);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
