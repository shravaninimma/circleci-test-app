# CircleCI Test App 

A sample test web application with a **button** that, when clicked, displays new text on the page.  
This repo also contains an automated test using **Jest + Puppeteer**, and is configured to run in **CircleCI**.

---

# Testing
Used Jest + Puppeteer to open the page, click the button, and assert that the text changes.

## CircleCI Integration
This project includes a .circleci/config.yml file so that tests run automatically in CircleCI.
On every push, CircleCI will:
- Install Node.js
- Install dependencies
- Run npm test
- Report test results in the build dashboard

## Install and Run test locally
Install nmp 

Install dependencies:
- npm install

Run tests in the root directory:
- npm test



Sample test run:

```console
 % npm test            

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
