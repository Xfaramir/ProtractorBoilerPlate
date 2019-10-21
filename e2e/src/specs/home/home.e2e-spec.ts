import { HomePage } from '../../pageobjects/homePage.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeAll(async () => {
    console.log('Starting Home Test');
    page = new HomePage();
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should display headline', async () => {
    await expect(page.header.getText()).toEqual('MEET PGA');
  });

  it('should close gdrp banner', async () => {
    await page.bannerGDRP.click();
  });
  it('should display leaderboard', async () => {
    await page.expectAndScroll(page.leaderboardButton);
  });

  it('should coach pga of america headline options', async () => {
    await page.scrollCenter(page.pgaOfAmericaHeadline);
    await expect(page.pgaOfAmericaHeadline.getText()).toEqual(
      'Our members bring you their wealth of real-world, championship-level understanding of the game. Armed with a PGA Coach by your side, make leveling up a breeze.'
    );
  });
  it('should focus 1 carrousel slide group option Level up', async () => {
    await page.scrollCenter(page.levelUpButton);
  });

  it('should switch carrousel category', async () => {
    await page.connectButton.click();
    await page.scrollCenter(page.levelUpButton);
  });

  it('should open overlay', async () => {
    await page.coachCarrouselImage.click();
  });

  it('should  play video', async () => {
    await page.coachOverlayVideoButton.click();
    await browser.sleep(2000);
  });

  it('should close overlay and display headline top series', async () => {
    await page.expectClickable(page.coachOverlayCloseButton);
    await page.coachOverlayCloseButton.click();
    await page.scrollStart(page.topStoriesHeadline);
    const headlineText = await page.topStoriesHeadline.getText();
    expect(headlineText).toEqual('Top Stories');
  });

  it('should display pga reach', async () => {
    const pgareachText = await page.pgaReachHeadline.getText();
    expect(pgareachText).toEqual(
      'PGA REACH is the 501(c)(3) charitable foundation of the PGA of America. The mission of PGA REACH is to positively impact the lives of youth, military, and diverse populations by enabling access to PGA Professionals, PGA Sections and the game of golf.'
    );
    await page.scrollCenter(page.pgaReachHeadline);
  });

  it('should display footer', async () => {
    const footerText = await page.footer.getText();
    expect(footerText).toEqual('EXPLORE');
    await page.scrollStart(page.footer);
  });

  xit('test', async () => {
    await browser.sleep(1000);
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
