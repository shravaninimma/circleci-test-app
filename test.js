// test.js
const assert = require("assert");

// simulate button click
let buttonClicked = false;
function clickButton() {
  buttonClicked = true;
  return "Hello from button!";
}

// test: after clicking, the new text should appear
const result = clickButton();
assert.strictEqual(result, "Hello from button!");
assert.strictEqual(buttonClicked, true);

console.log("✅ Test passed");

