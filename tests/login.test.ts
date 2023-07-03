import { test, expect, chromium } from '@playwright/test';

test('login test demo',async ()=>{
   const browser = await chromium.launch();
   const contex = await browser.newContext();
   const page = await contex.newPage();

   await page.goto('https://ecommerce-playground.lambdatest.io/')
   await page.getByRole('button', { name: ' My account' }).hover();
   await page.getByRole('link', { name: 'Login' }).click();
   await page.getByPlaceholder('E-Mail Address').fill('amratia4+1@gmail.com')
   await page.getByPlaceholder('Password').fill('Password@123')
   await page.getByRole('button', {name: 'Login'}).click

})