import { AppPage } from '../pageobjects/app.po';
import { browser, logging, protractor, element, by } from 'protractor';
var EC = protractor.ExpectedConditions;
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
    let leaderboardButton = page.getLeaderboardButton();
    await browser.wait(EC.visibilityOf(leaderboardButton));
    await browser
      .actions()
      .mouseMove(leaderboardButton)
      .perform();
  });

  it('should display coach image', async () => {
    await browser.wait(EC.visibilityOf(page.getCoachImage()));
    await browser
      .actions()
      .mouseMove(page.getCoachImage())
      .perform();
  });

  it('should click button and open coach overlay', async () => {
    browser.wait(EC.visibilityOf(page.getCoachButton()));
    page.getCoachButton().click();
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
