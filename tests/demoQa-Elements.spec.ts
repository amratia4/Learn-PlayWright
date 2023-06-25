import { test, expect } from "@playwright/test";
test.use({
  viewport: { width: 1600, height: 1200 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByText("Elements").click();
  //expect(page).toHaveTitle("Elements");
});

test("Navigate to Elements page", async ({ page }) => {
  await page.getByText("Text Box").click();
  expect(page.locator(".main-header")).toHaveText("Text Box");
  await page.getByPlaceholder("Full Name").fill("Fname Lname");
  await page.getByPlaceholder("name@example.com").fill("Fname@test.com");
  await page.getByPlaceholder("Current Address").fill("Test Address");
  await page.locator("#permanentAddress").click();
  await page.locator("#permanentAddress").fill("arqrqwrq");
  await page.getByRole("button", { name: "Submit" }).click();
  expect(page.locator("#output")).toContainText("Fname Lname");
});
