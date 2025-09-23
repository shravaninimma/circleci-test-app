const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });

const btn = dom.window.document.getElementById('btn');
const msg = dom.window.document.getElementById('message');

btn.click();

if (msg.textContent === 'Button clicked!') {
  console.log('✅ Test passed');
  process.exit(0);
} else {
  console.error('❌ Test failed');
  process.exit(1);
}

