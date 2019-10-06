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

  it('should display headline', async () => {
    await expect(page.getTitleText()).toEqual(
      'Your best golf is closer than you think. QA'
    );
  });

  it('should close grdp banner headline', async () => {
    await page.getBannerGDRP().click();
  });

  it('should display leaderboard', async () => {
    const leaderboardButton = page.getLeaderboardButton();
    await page.expectAndFocus(leaderboardButton);
  });

  it('should display coach image', async () => {
    const coachImage = page.getCoachImage();
    await page.expectAndFocus(coachImage);
  });
  it('should display overlay after click', async () => {
    const coachButton = await page.getCoachButton();
    await coachButton.click();
  });
  it('should play video', async () => {
    const videoButton = await page.getVideoButton();
    await page.expectAndFocus(videoButton);
    await videoButton.click();
  });
  it('should close video', async () => {
    const videoCloseButton = await page.getVideoButton();
    await page.expectAndFocus(videoCloseButton);
    await videoCloseButton.click();
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
