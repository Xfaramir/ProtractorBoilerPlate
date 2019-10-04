import { AppPage } from '../pageobjects/app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(async () => {
    console.log('Starting Home Test');
  });

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

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

  it('should display overlay after click', async () => {
    const coachButton = await page.getCoachButton();
    await page.expectElement(coachButton);
    await coachButton.click();
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
