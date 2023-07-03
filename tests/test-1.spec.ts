import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByText('Check Box').click();
  await page.getByRole('button', { name: 'Toggle' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Desktop$/ }).getByRole('button', { name: 'Toggle' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Documents$/ }).getByRole('button', { name: 'Toggle' }).click();
  await page.getByRole('listitem').filter({ hasText: /^WorkSpace$/ }).getByRole('button', { name: 'Toggle' }).click();
  await page.locator('label').filter({ hasText: 'React' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Angular' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Commands' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first().click();
  await page.getByRole('listitem').filter({ hasText: /^Downloads$/ }).getByRole('button', { name: 'Toggle' }).click();
  await page.locator('label').filter({ hasText: 'Word File.doc' }).locator('path').first().click();
});