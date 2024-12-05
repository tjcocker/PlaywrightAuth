const { test } = require('@playwright/test');

require('./fixture');

test('Test Case 1', async ({ page }) => {
  const column = page.locator('h2.To.Do >> text="To Do"');
  await column.first().getByText('Implement user authentication').isVisible();
  await column.first().getByText('Feature').isVisible();
  await column.first().getByText('High Priority').isVisible();

});

test('Test Case 2', async ({ page }) => {

  const column = page.locator('h2.To.Do >> text="To Do"');
  await column.nth(1).getByText('Fix navigation bug').isVisible();
  await column.nth(1).getByText('Bug', { exact: true }).isVisible();

});

test('Test Case 3', async ({ page }) => {

  const column = page.locator('h2.In.Progress >> text="In Progress"');
  await column.first().getByText('Design system updates').isVisible();
  await column.first().getByText('Design', { exact: true }).isVisible();

});

test('Test Case 4', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  const column = page.locator('h2.To.Do >> text="To Do"');
  await column.first().getByText('Push notification system').isVisible();
  await column.first().getByText('Feature').isVisible();

});

test('Test Case 5', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  const column = page.locator('h2.In.Progress >> text="In Progress"');
  await column.first().getByText('Offline Mode').isVisible();
  await column.first().getByText('Feature', { exact: true }).isVisible();
  await column.first().getByText('High Priority', { exact: true }).isVisible();

});

test('Test Case 6', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  const column = page.locator('h2.Done >> text="Done"');
  await column.first().getByText('App icon design').isVisible();
  await column.first().getByText('Design', { exact: true }).isVisible();

});