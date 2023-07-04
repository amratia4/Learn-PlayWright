import {test, expect} from "@playwright/test"

const firstValue = 10
const secondValue = 5
const sum = firstValue + secondValue

test('Basic Interactions',async ({page}) => {
   await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo')
   await page.getByPlaceholder('Please enter your Message').fill('Learning PalyWright')
   await page . getByRole('button', {name: 'Get Checked Value'}).click()
   await expect(page.locator('#message')).toHaveText('Learning PalyWright')
   await page.getByPlaceholder('Please enter first value').fill(`${firstValue}`)
   await page.getByPlaceholder('Please enter second value').fill(`${secondValue}`)
   await page . getByRole('button', {name: 'Get Sum'}).click()
   await expect(page.locator('#addmessage')).toHaveText(`${sum}`)
   
})

test('Check box',async ({page}) => {
   await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo')
   await page.getByRole ('checkbox', {name: 'Click on check box'}).check()
   //await expect(page.getByRole('checkbox', {name:'Option 3'}).first()).toBeDisabled()
   const disabledcheckbox = page.getByText('Disabled Checkbox Demo')
   const Option3Checkbox= page.locator("(//label[@for='ex1-check2'])[2]")
   await expect(disabledcheckbox).toContainText('Disabled')
   await expect(Option3Checkbox).toContainText('Option 3')
   await expect(Option3Checkbox).toBeDisabled()
   //await expect(disabledcheckbox.filter({has: Option3Checkbox})).toBeDisabled()
})