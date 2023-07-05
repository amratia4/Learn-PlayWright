import { expect, test } from "@playwright/test";


test('handling Alerts',async ({page}) => {
   await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
   // page.on('dialog',async (alret) => {
   //    const text=  alret.message()
   //    console.log(text)
   //    await alret.accept()
   // })
   page.on('dialog',async (alret) => {
      const text = alret.defaultValue()
      await alret.accept('My name entered')
   })
   // await page.getByRole('button', {name: 'Click Me'}).nth(0).click()
  // await page.getByRole('button', {name: 'Click Me'}).nth(1).click()
  // expect(page.locator('#confirm-demo')).toContainText('You pressed OK!')
  await page.getByRole('button', {name: 'Click Me'}).nth(2).click()
  expect(page.locator('#prompt-demo')).toContainText('My name entered')

   
})

test('dropDowns',async ({page}) => {
   await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
   await page.locator('#select-demo').selectOption('Sunday')

await page.locator('#multi-select').selectOption('Florida');
await page.getByRole('button', { name: 'First Selected' }).click();

// await page.locator('#multi-select').selectOption('Texas');
// await page.getByRole('button', { name: 'Get Last Selected' }).click();

// expect (page.locator('.groupradiobutton block break-words')).toContainText('Texas')
})