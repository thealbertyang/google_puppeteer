const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://production.pushpress.com');
  await page.type('.login #username', 'albert+production@pushpress.com');
  await page.type('.login #password', 'password');
  await page.screenshot({path: 'login_enter.png'});
  await page.$eval('#login-form', form => form.submit());
  await page.screenshot({path: 'login_submit.png'});
  await browser.close();
})();