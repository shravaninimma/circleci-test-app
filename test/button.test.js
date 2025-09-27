const puppeteer = require("puppeteer");

describe("Button click test", () => {
  let browser;
  let page;

  // Increase timeout for all tests in this file
  jest.setTimeout(30000); // 30s

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true, // run in headless mode
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // safer flags
    });
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../index.html`);
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test("displays new text when button is clicked", async () => {
    await page.click("#btn");
    const text = await page.$eval("#message", el => el.innerText);
    expect(text).toBe("Button clicked!");
  });
});

