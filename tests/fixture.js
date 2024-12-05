const { test } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("password123");
  await page.getByRole('button', { name: 'Sign in' }).click();

})