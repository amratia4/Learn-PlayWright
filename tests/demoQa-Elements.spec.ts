import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByText("Elements").click();
  //expect(page).toHaveTitle("Elements");
});

test("Navigate to Elements", async ({ page }) => {
  await page.getByText("Text Box").click();
  expect(page.locator(".main-header")).toHaveText("Text Box");
  await page.getByPlaceholder("Full Name").fill("Fname Lname");
  await page.getByPlaceholder("name@example.com").fill("Fname@test.com");
  await page.getByPlaceholder("Current Address").fill("Test Address");
  await page.locator("#permanentAddress").click();
  await page.locator("#permanentAddress").fill("arqrqwrq");
  await page.getByRole("button", { name: "Submit" }).click();
  expect(page.locator("#name")).toHaveText("Fname Lname");
});
