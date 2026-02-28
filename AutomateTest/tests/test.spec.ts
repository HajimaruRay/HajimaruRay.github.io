import { test, expect } from '@playwright/test';

test('Goto Web', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle("Chonlatree Portfilo");
  await expect(page.getByRole('heading', { name: 'I\'m Chonlatree Ketkorwoing' })).toBeVisible();
});

test('login test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Chonlatree Ketkorwoing' }).click();

  await expect(page).toHaveTitle("Login");
  await expect(page.getByText('User Name :')).toBeVisible();
  await page.getByRole('textbox', { name: 'User Name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveTitle("Fuel Calculater");
});

test('About Me! Link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'View Profile!' }).click();
  await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});

test('Click Home Link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Home' }).click();

  await expect(page).toHaveTitle("Chonlatree Portfilo");
  await expect(page.getByRole('heading', { name: 'I\'m Chonlatree Ketkorwoing' })).toBeVisible();
});

test('Click Projects Link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Profile', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});

test('Educational Record Link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Educational Record' }).click();
  await expect(page).toHaveTitle(/Educational Record/);
});