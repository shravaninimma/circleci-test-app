# CircleCI Test App 

A sample test web application with a **button** that, when clicked, displays new text on the page.  
This repo also contains an automated test using **Jest + Puppeteer**, and is configured to run in **CircleCI**.

---

## 📂 Project Structure

circleci-test-app/
├── index.html # Web page with button + placeholder for message
├── script.js # JavaScript to update text when button is clicked
├── package.json # Project metadata + scripts + dependencies
├── test/
│ └── button.test.js # Jest + Puppeteer test to verify button works
└── .circleci/
└── config.yml # CircleCI configuration



---

## 🖥️ Web Application

**index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>CircleCI Sample App</title>
  </head>
  <body>
    <button id="btn">Click Me</button>
    <p id="message"></p>
    <script src="script.js"></script>
  </body>
</html>


**script.js**


document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("message").innerText = "Hello from button!";
});


**package.json**
This file defines the project’s metadata, scripts, and dependencies:


{
  "name": "circleci-test-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "jsdom": "^22.1.0"
  },
  "devDependencies": {
    "jest": "^30.1.3",
    "puppeteer": "^24.22.3"
  }
}


jest → testing framework

puppeteer → headless Chrome for simulating button click

test script → runs Jest

**Testing**
Used Jest + Puppeteer to open the page, click the button, and assert that the text changes.

Below is the sample test/button.test.js file


const puppeteer = require("puppeteer");

describe("Button click test", () => {
  let browser;
  let page;

  jest.setTimeout(30000); // Increase timeout for CI

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../index.html`);
  });

  afterAll(async () => {
    if (browser) await browser.close();
  });

  test("displays new text when button is clicked", async () => {
    await page.click("#btn");
    const text = await page.$eval("#message", el => el.innerText);
    expect(text).toBe("Hello from button!");
  });
});

**Install and Run test locally**
Install nmp 
Install dependencies:

npm install

Run tests in the root directory:
npm test


Sample test run:

 xxx-MacBook-Air circleci-test-app % npm test            

> circleci-sample-app@1.0.0 test
> jest

 PASS  test/button.test.js
  Button click test
    ✓ displays new text when button is clicked (108 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.88 s
Ran all test suites.

**CircleCI Integration**
This project includes a .circleci/config.yml file so that tests run automatically in CircleCI.
On every push, CircleCI will:

Install Node.js

Install dependencies

Run npm test

Report test results in the build dashboard
